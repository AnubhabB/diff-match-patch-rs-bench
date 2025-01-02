use std::path::Path;

use criterion::{criterion_group, criterion_main, AxisScale, BenchmarkId, Criterion, PlotConfiguration};
use diff_match_patch_rs::traits::DType;
use rand::Rng;

fn prefix_linear<T: DType>(a: &[T], b: &[T], _: bool) -> usize {
    let found = a.iter().zip(b.iter()).take_while(|(a, b)| a == b).count();

    found
}

fn prefix_binary<T: DType>(lhs: &[T], rhs: &[T], reverse: bool) -> usize {
    if lhs.is_empty()
        || rhs.is_empty()
        || (!reverse && (lhs.first() != rhs.first()))
        || (reverse && (lhs.last() != rhs.last()))
    {
        return 0;
    }

    let mut pointmin = 0;
    let mut pointmax = lhs.len().min(rhs.len());
    let mut pointmid = pointmax;

    let mut pointstart = 0;

    while pointmin < pointmid {
        let (lhsrange, rhsrange) = if !reverse {
            (pointstart..pointmid, pointstart..pointmid)
        } else {
            (
                lhs.len() - pointmid..lhs.len() - pointstart,
                rhs.len() - pointmid..rhs.len() - pointstart,
            )
        };

        if lhs[lhsrange] == rhs[rhsrange] {
            pointmin = pointmid;
            pointstart = pointmin;
        } else {
            pointmax = pointmid;
        }

        pointmid = ((pointmax - pointmin) >> 1) + pointmin; // /2
    }

    pointmid
}

fn generate_data(old: &str, new: &str, l: usize, random: bool) -> (String, String) {
    if !random {
        let mut o = old.chars().take(l).collect::<Vec<_>>();
        let mut n = new.chars().take(l).collect::<Vec<_>>();

        while o.len() < l && n.len() < l {
            let o_diff = l - o.len();
            let n_diff = l - n.len();

            o = [&o[..], &old.chars().take(o_diff).collect::<Vec<_>>()].concat();
            n = [&n[..], &new.chars().take(n_diff).collect::<Vec<_>>()].concat();
        }

        (o.iter().collect::<String>(), n.iter().collect::<String>())
    } else {
        let mut rng = rand::thread_rng();
    
        // Generate two vectors with common prefix of len/2
        let common_prefix: Vec<char> = (0..l/2).map(|_| rng.gen::<char>()).collect();
        
        let mut lhs = common_prefix.clone();
        lhs.extend((0..l/2).map(|_| rng.gen::<char>()));
        
        let mut rhs = common_prefix;
        rhs.extend((0..l/2).map(|_| rng.gen::<char>()));
        
        (lhs.iter().collect::<String>(), rhs.iter().collect::<String>())
    }
}


pub fn prefix_bench(c: &mut Criterion) {
    let d_len = [100_usize, 1000, 10000, 100000, 1000000, 10000000];
    // Create a benchmark group with logarithmic scaling for the plot
    let plot_config = PlotConfiguration::default()
        .summary_scale(AxisScale::Logarithmic);

    let mut group = c.benchmark_group("common_prefix");
    group.plot_config(plot_config);

    let basedir = Path::new("../testdata");

    let old = std::fs::read_to_string(basedir.join("txt_old.txt")).unwrap();
    let new = std::fs::read_to_string(basedir.join("txt_new.txt")).unwrap();

    for len in d_len {
        let (lhs, rhs) = generate_data(&old, &new, len, true);

        // Benchmark binary search implementation
        group.bench_with_input(
            BenchmarkId::new("prefix_bin", len), 
            &(lhs.as_bytes(), rhs.as_bytes()),
            |b, (lhs, rhs)| {
                b.iter(|| prefix_binary(lhs, rhs, false));
            }
        );
        
        // Benchmark linear implementation
        group.bench_with_input(
            BenchmarkId::new("prefix_lin", len),
            &(lhs.as_bytes(), rhs.as_bytes()),
            |b, (lhs, rhs)| {
                b.iter(|| prefix_linear(lhs, rhs, false));
            }
        );
    }
}

criterion_group!(prefix, prefix_bench);
criterion_main!(prefix);
