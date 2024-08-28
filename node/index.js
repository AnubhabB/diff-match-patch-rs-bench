import { Bench } from "tinybench";
import DiffMatchPatch from 'diff-match-patch';

export let TXT_OLD = `This is a '''list of newspapers published by [[Journal Register Company]]'''.

The company owns daily and weekly newspapers, other print media properties and newspaper-affiliated local Websites in the [[U.S.]] states of [[Connecticut]], [[Michigan]], [[New York]], [[Ohio]] and [[Pennsylvania]], organized in six geographic "clusters":<ref>[http://www.journalregister.com/newspapers.html Journal Register Company: Our Newspapers], accessed February 10, 2008.</ref>

== Capital-Saratoga ==
Three dailies, associated weeklies and [[pennysaver]]s in greater [[Albany, New York]]; also [http://www.capitalcentral.com capitalcentral.com] and [http://www.jobsinnewyork.com JobsInNewYork.com].

* ''The Oneida Daily Dispatch'' {{WS|oneidadispatch.com}} of [[Oneida, New York]]
* ''[[The Record (Troy)|The Record]]'' {{WS|troyrecord.com}} of [[Troy, New York]]
* ''[[The Saratogian]]'' {{WS|saratogian.com}} of [[Saratoga Springs, New York]]
* Weeklies:
** ''Community News'' {{WS|cnweekly.com}} weekly of [[Clifton Park, New York]]
** ''Rome Observer'' of [[Rome, New York]]
** ''Life & Times of Utica'' of [[Utica, New York]]

== Connecticut ==
Five dailies, associated weeklies and [[pennysaver]]s in the state of [[Connecticut]]; also [http://www.ctcentral.com CTcentral.com], [http://www.ctcarsandtrucks.com CTCarsAndTrucks.com] and [http://www.jobsinct.com JobsInCT.com].

* ''The Middletown Press'' {{WS|middletownpress.com}} of [[Middletown, Connecticut|Middletown]]
* ''[[New Haven Register]]'' {{WS|newhavenregister.com}} of [[New Haven, Connecticut|New Haven]]
* ''The Register Citizen'' {{WS|registercitizen.com}} of [[Torrington, Connecticut|Torrington]]

* [[New Haven Register#Competitors|Elm City Newspapers]] {{WS|ctcentral.com}}
** ''The Advertiser'' of [[East Haven, Connecticut|East Haven]]
** ''Hamden Chronicle'' of [[Hamden, Connecticut|Hamden]]
** ''Milford Weekly'' of [[Milford, Connecticut|Milford]]
** ''The Orange Bulletin'' of [[Orange, Connecticut|Orange]]
** ''The Post'' of [[North Haven, Connecticut|North Haven]]
** ''Shelton Weekly'' of [[Shelton, Connecticut|Shelton]]
** ''The Stratford Bard'' of [[Stratford, Connecticut|Stratford]]
** ''Wallingford Voice'' of [[Wallingford, Connecticut|Wallingford]]
** ''West Haven News'' of [[West Haven, Connecticut|West Haven]]
* Housatonic Publications 
** ''The New Milford Times'' {{WS|newmilfordtimes.com}} of [[New Milford, Connecticut|New Milford]]
** ''The Brookfield Journal'' of [[Brookfield, Connecticut|Brookfield]]
** ''The Kent Good Times Dispatch'' of [[Kent, Connecticut|Kent]]
** ''The Bethel Beacon'' of [[Bethel, Connecticut|Bethel]]
** ''The Litchfield Enquirer'' of [[Litchfield, Connecticut|Litchfield]]
** ''Litchfield County Times'' of [[Litchfield, Connecticut|Litchfield]]
* Imprint Newspapers {{WS|imprintnewspapers.com}}
** ''West Hartford News'' of [[West Hartford, Connecticut|West Hartford]]
** ''Windsor Journal'' of [[Windsor, Connecticut|Windsor]]
** ''Windsor Locks Journal'' of [[Windsor Locks, Connecticut|Windsor Locks]]
** ''Avon Post'' of [[Avon, Connecticut|Avon]]
** ''Farmington Post'' of [[Farmington, Connecticut|Farmington]]
** ''Simsbury Post'' of [[Simsbury, Connecticut|Simsbury]]
** ''Tri-Town Post'' of [[Burlington, Connecticut|Burlington]], [[Canton, Connecticut|Canton]] and [[Harwinton, Connecticut|Harwinton]]
* Minuteman Publications
** ''[[Fairfield Minuteman]]'' of [[Fairfield, Connecticut|Fairfield]]
** ''The Westport Minuteman'' {{WS|westportminuteman.com}} of [[Westport, Connecticut|Westport]]
* Shoreline Newspapers weeklies:
** ''Branford Review'' of [[Branford, Connecticut|Branford]]
** ''Clinton Recorder'' of [[Clinton, Connecticut|Clinton]]
** ''The Dolphin'' of [[Naval Submarine Base New London]] in [[New London, Connecticut|New London]]
** ''Main Street News'' {{WS|ctmainstreetnews.com}} of [[Essex, Connecticut|Essex]]
** ''Pictorial Gazette'' of [[Old Saybrook, Connecticut|Old Saybrook]]
** ''Regional Express'' of [[Colchester, Connecticut|Colchester]]
** ''Regional Standard'' of [[Colchester, Connecticut|Colchester]]
** ''Shoreline Times'' {{WS|shorelinetimes.com}} of [[Guilford, Connecticut|Guilford]]
** ''Shore View East'' of [[Madison, Connecticut|Madison]]
** ''Shore View West'' of [[Guilford, Connecticut|Guilford]]
* Other weeklies:
** ''Registro'' {{WS|registroct.com}} of [[New Haven, Connecticut|New Haven]]
** ''Thomaston Express'' {{WS|thomastownexpress.com}} of [[Thomaston, Connecticut|Thomaston]]
** ''Foothills Traders'' {{WS|foothillstrader.com}} of Torrington, Bristol, Canton

== Michigan ==
Four dailies, associated weeklies and [[pennysaver]]s in the state of [[Michigan]]; also [http://www.micentralhomes.com MIcentralhomes.com] and [http://www.micentralautos.com MIcentralautos.com]
* ''[[Oakland Press]]'' {{WS|theoaklandpress.com}} of [[Oakland, Michigan|Oakland]]
* ''Daily Tribune'' {{WS|dailytribune.com}} of [[Royal Oak, Michigan|Royal Oak]]
* ''Macomb Daily'' {{WS|macombdaily.com}} of [[Mt. Clemens, Michigan|Mt. Clemens]]
* ''[[Morning Sun]]'' {{WS|themorningsun.com}} of  [[Mount Pleasant, Michigan|Mount Pleasant]]
* Heritage Newspapers {{WS|heritage.com}}
** ''Belleville View''
** ''Ile Camera''
** ''Monroe Guardian''
** ''Ypsilanti Courier''
** ''News-Herald''
** ''Press & Guide''
** ''Chelsea Standard & Dexter Leader''
** ''Manchester Enterprise''
** ''Milan News-Leader''
** ''Saline Reporter''
* Independent Newspapers {{WS|sourcenewspapers.com}}
** ''Advisor''
** ''Source''
* Morning Star {{WS|morningstarpublishing.com}}
** ''Alma Reminder''
** ''Alpena Star''
** ''Antrim County News''
** ''Carson City Reminder''
** ''The Leader & Kalkaskian''
** ''Ogemaw/Oscoda County Star''
** ''Petoskey/Charlevoix Star''
** ''Presque Isle Star''
** ''Preview Community Weekly''
** ''Roscommon County Star''
** ''St. Johns Reminder''
** ''Straits Area Star''
** ''The (Edmore) Advertiser'' 
* Voice Newspapers {{WS|voicenews.com}}
** ''Armada Times''
** ''Bay Voice''
** ''Blue Water Voice''
** ''Downriver Voice''
** ''Macomb Township Voice''
** ''North Macomb Voice''
** ''Weekend Voice''
** ''Suburban Lifestyles'' {{WS|suburbanlifestyles.com}}

== Mid-Hudson ==
One daily, associated magazines in the [[Hudson River Valley]] of [[New York]]; also [http://www.midhudsoncentral.com MidHudsonCentral.com] and [http://www.jobsinnewyork.com JobsInNewYork.com].

* ''[[Daily Freeman]]'' {{WS|dailyfreeman.com}} of [[Kingston, New York]]

== Ohio ==
Two dailies, associated magazines and three shared Websites, all in the state of [[Ohio]]: [http://www.allaroundcleveland.com AllAroundCleveland.com], [http://www.allaroundclevelandcars.com AllAroundClevelandCars.com] and [http://www.allaroundclevelandjobs.com AllAroundClevelandJobs.com].

* ''[[The News-Herald (Ohio)|The News-Herald]]'' {{WS|news-herald.com}} of [[Willoughby, Ohio|Willoughby]]
* ''[[The Morning Journal]]'' {{WS|morningjournal.com}} of [[Lorain, Ohio|Lorain]]

== Philadelphia area ==
Seven dailies and associated weeklies and magazines in [[Pennsylvania]] and [[New Jersey]], and associated Websites: [http://www.allaroundphilly.com AllAroundPhilly.com], [http://www.jobsinnj.com JobsInNJ.com], [http://www.jobsinpa.com JobsInPA.com], and [http://www.phillycarsearch.com PhillyCarSearch.com].

* ''The Daily Local'' {{WS|dailylocal.com}} of [[West Chester, Pennsylvania|West Chester]]
* ''[[Delaware County Daily and Sunday Times]] {{WS|delcotimes.com}} of Primos
* ''[[The Mercury (Pennsylvania)|The Mercury]]'' {{WS|pottstownmercury.com}} of [[Pottstown, Pennsylvania|Pottstown]]
* ''The Phoenix'' {{WS|phoenixvillenews.com}} of [[Phoenixville, Pennsylvania|Phoenixville]]
* ''[[The Reporter (Lansdale)|The Reporter]]'' {{WS|thereporteronline.com}} of [[Lansdale, Pennsylvania|Lansdale]]
* ''The Times Herald'' {{WS|timesherald.com}} of [[Norristown, Pennsylvania|Norristown]]
* ''[[The Trentonian]]'' {{WS|trentonian.com}} of [[Trenton, New Jersey]]

* Weeklies
** ''El Latino Expreso'' of [[Trenton, New Jersey]]
** ''La Voz'' of [[Norristown, Pennsylvania]]
** ''The Village News'' of [[Downingtown, Pennsylvania]]
** ''The Times Record'' of [[Kennett Square, Pennsylvania]]
** ''The Tri-County Record'' {{WS|tricountyrecord.com}} of [[Morgantown, Pennsylvania]]
** ''News of Delaware County'' {{WS|newsofdelawarecounty.com}}of [[Havertown, Pennsylvania]]
** ''Main Line Times'' {{WS|mainlinetimes.com}}of [[Ardmore, Pennsylvania]]
** ''Penny Pincher'' of [[Pottstown, Pennsylvania]]
** ''Town Talk'' {{WS|towntalknews.com}} of [[Ridley, Pennsylvania]]
* Chesapeake Publishing {{WS|pa8newsgroup.com}} 
** ''Solanco Sun Ledger'' of [[Quarryville, Pennsylvania]]
** ''Columbia Ledger'' of [[Columbia, Pennsylvania]]
** ''Coatesville Ledger'' of [[Downingtown, Pennsylvania]]
** ''Parkesburg Post Ledger'' of [[Quarryville, Pennsylvania]]
** ''Downingtown Ledger'' of [[Downingtown, Pennsylvania]]
** ''The Kennett Paper'' of [[Kennett Square, Pennsylvania]]
** ''Avon Grove Sun'' of [[West Grove, Pennsylvania]]
** ''Oxford Tribune'' of [[Oxford, Pennsylvania]]
** ''Elizabethtown Chronicle'' of [[Elizabethtown, Pennsylvania]]
** ''Donegal Ledger'' of [[Donegal, Pennsylvania]]
** ''Chadds Ford Post'' of [[Chadds Ford, Pennsylvania]]
** ''The Central Record'' of [[Medford, New Jersey]]
** ''Maple Shade Progress'' of [[Maple Shade, New Jersey]]
* Intercounty Newspapers {{WS|buckslocalnews.com}} 
** ''The Review'' of Roxborough, Pennsylvania
** ''The Recorder'' of [[Conshohocken, Pennsylvania]]
** ''The Leader'' of [[Mount Airy, Pennsylvania|Mount Airy]] and West Oak Lake, Pennsylvania
** ''The Pennington Post'' of [[Pennington, New Jersey]]
** ''The Bristol Pilot'' of [[Bristol, Pennsylvania]]
** ''Yardley News'' of [[Yardley, Pennsylvania]]
** ''New Hope Gazette'' of [[New Hope, Pennsylvania]]
** ''Doylestown Patriot'' of [[Doylestown, Pennsylvania]]
** ''Newtown Advance'' of [[Newtown, Pennsylvania]]
** ''The Plain Dealer'' of [[Williamstown, New Jersey]]
** ''News Report'' of [[Sewell, New Jersey]]
** ''Record Breeze'' of [[Berlin, New Jersey]]
** ''Newsweekly'' of [[Moorestown, New Jersey]]
** ''Haddon Herald'' of [[Haddonfield, New Jersey]]
** ''New Egypt Press'' of [[New Egypt, New Jersey]]
** ''Community News'' of [[Pemberton, New Jersey]]
** ''Plymouth Meeting Journal'' of [[Plymouth Meeting, Pennsylvania]]
** ''Lafayette Hill Journal'' of [[Lafayette Hill, Pennsylvania]]
* Montgomery Newspapers {{WS|montgomerynews.com}} 
** ''Ambler Gazette'' of [[Ambler, Pennsylvania]]
** ''Central Bucks Life'' of [[Bucks County, Pennsylvania]]
** ''The Colonial'' of [[Plymouth Meeting, Pennsylvania]]
** ''Glenside News'' of [[Glenside, Pennsylvania]]
** ''The Globe'' of [[Lower Moreland Township, Pennsylvania]]
** ''Main Line Life'' of [[Ardmore, Pennsylvania]]
** ''Montgomery Life'' of [[Fort Washington, Pennsylvania]]
** ''North Penn Life'' of [[Lansdale, Pennsylvania]]
** ''Perkasie News Herald'' of [[Perkasie, Pennsylvania]]
** ''Public Spirit'' of [[Hatboro, Pennsylvania]]
** ''Souderton Independent'' of [[Souderton, Pennsylvania]]
** ''Springfield Sun'' of [[Springfield, Pennsylvania]]
** ''Spring-Ford Reporter'' of [[Royersford, Pennsylvania]]
** ''Times Chronicle'' of [[Jenkintown, Pennsylvania]]
** ''Valley Item'' of [[Perkiomenville, Pennsylvania]]
** ''Willow Grove Guide'' of [[Willow Grove, Pennsylvania]]
* News Gleaner Publications (closed December 2008) {{WS|newsgleaner.com}} 
** ''Life Newspapers'' of [[Philadelphia, Pennsylvania]]
* Suburban Publications
** ''The Suburban & Wayne Times'' {{WS|waynesuburban.com}} of [[Wayne, Pennsylvania]]
** ''The Suburban Advertiser'' of [[Exton, Pennsylvania]]
** ''The King of Prussia Courier'' of [[King of Prussia, Pennsylvania]]
* Press Newspapers {{WS|countypressonline.com}} 
** ''County Press'' of [[Newtown Square, Pennsylvania]]
** ''Garnet Valley Press'' of [[Glen Mills, Pennsylvania]]
** ''Haverford Press'' of [[Newtown Square, Pennsylvania]] (closed January 2009)
** ''Hometown Press'' of [[Glen Mills, Pennsylvania]] (closed January 2009)
** ''Media Press'' of [[Newtown Square, Pennsylvania]] (closed January 2009)
** ''Springfield Press'' of [[Springfield, Pennsylvania]]
* Berks-Mont Newspapers {{WS|berksmontnews.com}} 
** ''The Boyertown Area Times'' of [[Boyertown, Pennsylvania]]
** ''The Kutztown Area Patriot'' of [[Kutztown, Pennsylvania]]
** ''The Hamburg Area Item'' of [[Hamburg, Pennsylvania]]
** ''The Southern Berks News'' of [[Exeter Township, Berks County, Pennsylvania]]
** ''The Free Press'' of [[Quakertown, Pennsylvania]]
** ''The Saucon News'' of [[Quakertown, Pennsylvania]]
** ''Westside Weekly'' of [[Reading, Pennsylvania]]

* Magazines
** ''Bucks Co. Town & Country Living''
** ''Chester Co. Town & Country Living''
** ''Montomgery Co. Town & Country Living''
** ''Garden State Town & Country Living''
** ''Montgomery Homes''
** ''Philadelphia Golfer''
** ''Parents Express''
** ''Art Matters''

{{JRC}}
* Let's checkout Unicodes
Here's a long text with a variety of emoticons, broken into multiple paragraphs:

** Paragraph 1
Hey there! 🙂 I'm so excited to share this text with you! 🤩 It's going to be a wild ride 🎢 full of emotions 😂 and fun 🎉. We'll have some serious moments 🤔, some silly moments 🤪, and some moments that will make you go "huh?" 🤔.

** Paragraph 2
Let's start with some basics 😊. We've got your standard smiley face 🙂, your sad face ☹️, and your angry face 😠. But wait, there's more! 🤩 We've also got some more complex emotions like 😍, 🤤, and 🚀. And let's not forget about the classics: 😉, 👍, and 👏.

** Paragraph 3
Now, let's get a little crazy 🤪! 🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉👯‍♀️🕺 We've got emojis for every occasion 🎂, every emotion 🤣, and every interest 🎨. Want to talk about food? 🍔🍕🥤 We've got emojis for that! Want to talk about travel? 🗺️🛫️ We've got emojis for that too!

** Paragraph 4
But wait, there's more! 🤯 We've also got some more obscure emojis 🤔. Like, have you ever seen this one? 🚯 Or this one? 🛂️ What about this one? 🤷‍♂️ Yeah, we've got all those and more!

** Paragraph 5
So, there you have it! 🎉 A text full of emojis, fun, and excitement 🤩. We hope you enjoyed the ride 🎢 and will join us again soon 🤗. Until next time, stay emoji-tastic! 😄👋

Note: I've used a variety of emojis, including:

- Smiley faces and emotions (e.g., 🙂, 😂, 🤔)
- Objects (e.g., 🎉, 🎂, 🍔)
- Animals (e.g., 🐶, 🐱)
- Symbols (e.g., 👍, 👏)
- Flags (e.g., 🇺🇸, 🇬🇧)
- And more! 🤯

==References==
<references />

[[Category:Journal Register publications|*]]`;

export let TXT_NEW = `This is a '''list of newspapers published by [[Journal Register Company]]'''.

The company owns daily and weekly newspapers, other print media properties and newspaper-affiliated local Websites in the [[U.S.]] states of [[Connecticut]], [[Michigan]], [[New York]], [[Ohio]], [[Pennsylvania]] and [[New Jersey]], organized in six geographic "clusters":<ref>[http://www.journalregister.com/publications.html Journal Register Company: Our Publications], accessed April 21, 2010.</ref>

== Capital-Saratoga ==
Three dailies, associated weeklies and [[pennysaver]]s in greater [[Albany, New York]]; also [http://www.capitalcentral.com capitalcentral.com] and [http://www.jobsinnewyork.com JobsInNewYork.com].

* ''The Oneida Daily Dispatch'' {{WS|oneidadispatch.com}} of [[Oneida, New York]]
* ''[[The Record (Troy)|The Record]]'' {{WS|troyrecord.com}} of [[Troy, New York]]
* ''[[The Saratogian]]'' {{WS|saratogian.com}} of [[Saratoga Springs, New York]]
* Weeklies:
** ''Community News'' {{WS|cnweekly.com}} weekly of [[Clifton Park, New York]]
** ''Rome Observer'' {{WS|romeobserver.com}} of [[Rome, New York]]
** ''WG Life '' {{WS|saratogian.com/wglife/}} of [[Wilton, New York]]
** ''Ballston Spa Life '' {{WS|saratogian.com/bspalife}} of [[Ballston Spa, New York]]
** ''Greenbush Life'' {{WS|troyrecord.com/greenbush}} of [[Troy, New York]]
** ''Latham Life'' {{WS|troyrecord.com/latham}} of [[Latham, New York]]
** ''River Life'' {{WS|troyrecord.com/river}} of [[Troy, New York]]

== Connecticut ==
Three dailies, associated weeklies and [[pennysaver]]s in the state of [[Connecticut]]; also [http://www.ctcentral.com CTcentral.com], [http://www.ctcarsandtrucks.com CTCarsAndTrucks.com] and [http://www.jobsinct.com JobsInCT.com].

* ''The Middletown Press'' {{WS|middletownpress.com}} of [[Middletown, Connecticut|Middletown]]
* ''[[New Haven Register]]'' {{WS|newhavenregister.com}} of [[New Haven, Connecticut|New Haven]]
* ''The Register Citizen'' {{WS|registercitizen.com}} of [[Torrington, Connecticut|Torrington]]

* Housatonic Publications 
** ''The Housatonic Times'' {{WS|housatonictimes.com}} of [[New Milford, Connecticut|New Milford]]
** ''Litchfield County Times'' {{WS|countytimes.com}} of [[Litchfield, Connecticut|Litchfield]]

* Minuteman Publications
** ''[[Fairfield Minuteman]]'' {{WS|fairfieldminuteman.com}}of [[Fairfield, Connecticut|Fairfield]]
** ''The Westport Minuteman'' {{WS|westportminuteman.com}} of [[Westport, Connecticut|Westport]]

* Shoreline Newspapers 
** ''The Dolphin'' {{WS|dolphin-news.com}} of [[Naval Submarine Base New London]] in [[New London, Connecticut|New London]]
** ''Shoreline Times'' {{WS|shorelinetimes.com}} of [[Guilford, Connecticut|Guilford]]

* Foothills Media Group {{WS|foothillsmediagroup.com}}
** ''Thomaston Express'' {{WS|thomastonexpress.com}} of [[Thomaston, Connecticut|Thomaston]]
** ''Good News About Torrington'' {{WS|goodnewsabouttorrington.com}} of [[Torrington, Connecticut|Torrington]]
** ''Granby News'' {{WS|foothillsmediagroup.com/granby}} of [[Granby, Connecticut|Granby]]
** ''Canton News'' {{WS|foothillsmediagroup.com/canton}} of [[Canton, Connecticut|Canton]]
** ''Avon News'' {{WS|foothillsmediagroup.com/avon}} of [[Avon, Connecticut|Avon]]
** ''Simsbury News'' {{WS|foothillsmediagroup.com/simsbury}} of [[Simsbury, Connecticut|Simsbury]]
** ''Litchfield News'' {{WS|foothillsmediagroup.com/litchfield}} of [[Litchfield, Connecticut|Litchfield]]
** ''Foothills Trader'' {{WS|foothillstrader.com}} of Torrington, Bristol, Canton

* Other weeklies
** ''The Milford-Orange Bulletin'' {{WS|ctbulletin.com}} of [[Orange, Connecticut|Orange]]
** ''The Post-Chronicle'' {{WS|ctpostchronicle.com}} of [[North Haven, Connecticut|North Haven]]
** ''West Hartford News'' {{WS|westhartfordnews.com}} of [[West Hartford, Connecticut|West Hartford]]

* Magazines
** ''The Connecticut Bride'' {{WS|connecticutmag.com}}
** ''Connecticut Magazine'' {{WS|theconnecticutbride.com}}
** ''Passport Magazine'' {{WS|passport-mag.com}}

== Michigan ==
Four dailies, associated weeklies and [[pennysaver]]s in the state of [[Michigan]]; also [http://www.micentralhomes.com MIcentralhomes.com] and [http://www.micentralautos.com MIcentralautos.com]
* ''[[Oakland Press]]'' {{WS|theoaklandpress.com}} of [[Oakland, Michigan|Oakland]]
* ''Daily Tribune'' {{WS|dailytribune.com}} of [[Royal Oak, Michigan|Royal Oak]]
* ''Macomb Daily'' {{WS|macombdaily.com}} of [[Mt. Clemens, Michigan|Mt. Clemens]]
* ''[[Morning Sun]]'' {{WS|themorningsun.com}} of  [[Mount Pleasant, Michigan|Mount Pleasant]]

* Heritage Newspapers {{WS|heritage.com}}
** ''Belleville View'' {{WS|bellevilleview.com}}
** ''Ile Camera'' {{WS|thenewsherald.com/ile_camera}}
** ''Monroe Guardian''  {{WS|monreguardian.com}}
** ''Ypsilanti Courier'' {{WS|ypsilanticourier.com}}
** ''News-Herald'' {{WS|thenewsherald.com}}
** ''Press & Guide'' {{WS|pressandguide.com}}
** ''Chelsea Standard & Dexter Leader'' {{WS|chelseastandard.com}}
** ''Manchester Enterprise'' {{WS|manchesterguardian.com}}
** ''Milan News-Leader'' {{WS|milannews.com}}
** ''Saline Reporter'' {{WS|salinereporter.com}}
* Independent Newspapers 
** ''Advisor'' {{WS|sourcenewspapers.com}}
** ''Source'' {{WS|sourcenewspapers.com}}
* Morning Star {{WS|morningstarpublishing.com}}
** ''The Leader & Kalkaskian'' {{WS|leaderandkalkaskian.com}}
** ''Grand Traverse Insider'' {{WS|grandtraverseinsider.com}}
** ''Alma Reminder''
** ''Alpena Star''
** ''Ogemaw/Oscoda County Star''
** ''Presque Isle Star''
** ''St. Johns Reminder''

* Voice Newspapers {{WS|voicenews.com}}
** ''Armada Times''
** ''Bay Voice''
** ''Blue Water Voice''
** ''Downriver Voice''
** ''Macomb Township Voice''
** ''North Macomb Voice''
** ''Weekend Voice''

== Mid-Hudson ==
One daily, associated magazines in the [[Hudson River Valley]] of [[New York]]; also [http://www.midhudsoncentral.com MidHudsonCentral.com] and [http://www.jobsinnewyork.com JobsInNewYork.com].

* ''[[Daily Freeman]]'' {{WS|dailyfreeman.com}} of [[Kingston, New York]]
* ''Las Noticias'' {{WS|lasnoticiasny.com}} of [[Kingston, New York]]

== Ohio ==
Two dailies, associated magazines and three shared Websites, all in the state of [[Ohio]]: [http://www.allaroundcleveland.com AllAroundCleveland.com], [http://www.allaroundclevelandcars.com AllAroundClevelandCars.com] and [http://www.allaroundclevelandjobs.com AllAroundClevelandJobs.com].

* ''[[The News-Herald (Ohio)|The News-Herald]]'' {{WS|news-herald.com}} of [[Willoughby, Ohio|Willoughby]]
* ''[[The Morning Journal]]'' {{WS|morningjournal.com}} of [[Lorain, Ohio|Lorain]]
* ''El Latino Expreso'' {{WS|lorainlatino.com}} of [[Lorain, Ohio|Lorain]]

== Philadelphia area ==
Seven dailies and associated weeklies and magazines in [[Pennsylvania]] and [[New Jersey]], and associated Websites: [http://www.allaroundphilly.com AllAroundPhilly.com], [http://www.jobsinnj.com JobsInNJ.com], [http://www.jobsinpa.com JobsInPA.com], and [http://www.phillycarsearch.com PhillyCarSearch.com].

* ''[[The Daily Local News]]'' {{WS|dailylocal.com}} of [[West Chester, Pennsylvania|West Chester]]
* ''[[Delaware County Daily and Sunday Times]] {{WS|delcotimes.com}} of Primos [[Upper Darby Township, Pennsylvania]]
* ''[[The Mercury (Pennsylvania)|The Mercury]]'' {{WS|pottstownmercury.com}} of [[Pottstown, Pennsylvania|Pottstown]]
* ''[[The Reporter (Lansdale)|The Reporter]]'' {{WS|thereporteronline.com}} of [[Lansdale, Pennsylvania|Lansdale]]
* ''The Times Herald'' {{WS|timesherald.com}} of [[Norristown, Pennsylvania|Norristown]]
* ''[[The Trentonian]]'' {{WS|trentonian.com}} of [[Trenton, New Jersey]]

* Weeklies
* ''The Phoenix'' {{WS|phoenixvillenews.com}} of [[Phoenixville, Pennsylvania]]
** ''El Latino Expreso'' {{WS|njexpreso.com}} of [[Trenton, New Jersey]]
** ''La Voz'' {{WS|lavozpa.com}} of [[Norristown, Pennsylvania]]
** ''The Tri County Record'' {{WS|tricountyrecord.com}} of [[Morgantown, Pennsylvania]]
** ''Penny Pincher'' {{WS|pennypincherpa.com}}of [[Pottstown, Pennsylvania]]

* Chesapeake Publishing  {{WS|southernchestercountyweeklies.com}}
** ''The Kennett Paper'' {{WS|kennettpaper.com}} of [[Kennett Square, Pennsylvania]]
** ''Avon Grove Sun'' {{WS|avongrovesun.com}} of [[West Grove, Pennsylvania]]
** ''The Central Record'' {{WS|medfordcentralrecord.com}} of [[Medford, New Jersey]]
** ''Maple Shade Progress'' {{WS|mapleshadeprogress.com}} of [[Maple Shade, New Jersey]]

* Intercounty Newspapers {{WS|buckslocalnews.com}} {{WS|southjerseylocalnews.com}} 
** ''The Pennington Post'' {{WS|penningtonpost.com}} of [[Pennington, New Jersey]]
** ''The Bristol Pilot'' {{WS|bristolpilot.com}} of [[Bristol, Pennsylvania]]
** ''Yardley News'' {{WS|yardleynews.com}} of [[Yardley, Pennsylvania]]
** ''Advance of Bucks County'' {{WS|advanceofbucks.com}} of [[Newtown, Pennsylvania]]
** ''Record Breeze'' {{WS|recordbreeze.com}} of [[Berlin, New Jersey]]
** ''Community News'' {{WS|sjcommunitynews.com}} of [[Pemberton, New Jersey]]

* Montgomery Newspapers {{WS|montgomerynews.com}} 
** ''Ambler Gazette'' {{WS|amblergazette.com}} of [[Ambler, Pennsylvania]]
** ''The Colonial'' {{WS|colonialnews.com}} of [[Plymouth Meeting, Pennsylvania]]
** ''Glenside News'' {{WS|glensidenews.com}} of [[Glenside, Pennsylvania]]
** ''The Globe'' {{WS|globenewspaper.com}} of [[Lower Moreland Township, Pennsylvania]]
** ''Montgomery Life'' {{WS|montgomerylife.com}} of [[Fort Washington, Pennsylvania]]
** ''North Penn Life'' {{WS|northpennlife.com}} of [[Lansdale, Pennsylvania]]
** ''Perkasie News Herald'' {{WS|perkasienewsherald.com}} of [[Perkasie, Pennsylvania]]
** ''Public Spirit'' {{WS|thepublicspirit.com}} of [[Hatboro, Pennsylvania]]
** ''Souderton Independent'' {{WS|soudertonindependent.com}} of [[Souderton, Pennsylvania]]
** ''Springfield Sun'' {{WS|springfieldsun.com}} of [[Springfield, Pennsylvania]]
** ''Spring-Ford Reporter'' {{WS|springfordreporter.com}} of [[Royersford, Pennsylvania]]
** ''Times Chronicle'' {{WS|thetimeschronicle.com}} of [[Jenkintown, Pennsylvania]]
** ''Valley Item'' {{WS|valleyitem.com}} of [[Perkiomenville, Pennsylvania]]
** ''Willow Grove Guide'' {{WS|willowgroveguide.com}} of [[Willow Grove, Pennsylvania]]
** ''The Review'' {{WS|roxreview.com}} of [[Roxborough, Philadelphia, Pennsylvania]]

* Main Line Media News {{WS|mainlinemedianews.com}}
** ''Main Line Times'' {{WS|mainlinetimes.com}} of [[Ardmore, Pennsylvania]]
** ''Main Line Life'' {{WS|mainlinelife.com}} of [[Ardmore, Pennsylvania]]
** ''The King of Prussia Courier'' {{WS|kingofprussiacourier.com}} of [[King of Prussia, Pennsylvania]]

* Delaware County News Network {{WS|delconewsnetwork.com}} 
** ''News of Delaware County'' {{WS|newsofdelawarecounty.com}} of [[Havertown, Pennsylvania]]
** ''County Press'' {{WS|countypressonline.com}} of [[Newtown Square, Pennsylvania]]
** ''Garnet Valley Press'' {{WS|countypressonline.com}} of [[Glen Mills, Pennsylvania]]
** ''Springfield Press'' {{WS|countypressonline.com}} of [[Springfield, Pennsylvania]]
** ''Town Talk'' {{WS|towntalknews.com}} of [[Ridley, Pennsylvania]]

* Berks-Mont Newspapers {{WS|berksmontnews.com}} 
** ''The Boyertown Area Times'' {{WS|berksmontnews.com/boyertown_area_times}} of [[Boyertown, Pennsylvania]]
** ''The Kutztown Area Patriot'' {{WS|berksmontnews.com/kutztown_area_patriot}} of [[Kutztown, Pennsylvania]]
** ''The Hamburg Area Item'' {{WS|berksmontnews.com/hamburg_area_item}} of [[Hamburg, Pennsylvania]]
** ''The Southern Berks News'' {{WS|berksmontnews.com/southern_berks_news}} of [[Exeter Township, Berks County, Pennsylvania]]
** ''Community Connection'' {{WS|berksmontnews.com/community_connection}} of [[Boyertown, Pennsylvania]]

* Magazines
** ''Bucks Co. Town & Country Living'' {{WS|buckscountymagazine.com}} 
** ''Parents Express'' {{WS|parents-express.com}} 
** ''Real Men, Rednecks'' {{WS|realmenredneck.com}} 

{{JRC}}

* Let's checkout Unicodes
Here's a long text with a variety of emoticons, broken into multiple paragraphs:

** Paragraph 1
Hey there! 🙂 I'm so excited to share this text with you! 🤩 It's going to be a wild ride 🎢 full of emotions 😂 and fun 🎉. We'll have some serious moments 🤔, some silly moments 🤪, and some moments that will make you go "huh?" 🤔.

** Paragraph 2
Now, let's explore some emotional extremes 🌊. We've got your ecstatic face 🤩, your devastated face 😭, and your utterly confused face 🤯. But that's not all! 🤔 We've also got some subtle emotions like 😐, 🙃, and 👀.

** Paragraph 3
Now, let's get a little crazy 🤪! 🎉👯‍♀️🕺 We've got emojis for every occasion 🎂, every emotion 🤣, and every interest 🎨. Want to talk about food? 🍔🍕🥤 We've got emojis for that! Want to talk about travel? 🗺️🛫️ We've got emojis for that too!

** Paragraph 4
But wait, there's more! 🤯 We've also got some more obscure emojis 🤔. Like, have you ever seen this one? 🚯 Or this one? 🛂️ What about this one? 🤷‍♂️ Yeah, we've got all those and more!

** Paragraph 5
So, there you have it! 🎉 A text full of emojis, fun, and excitement 🤩. We hope you enjoyed the ride 🎢 and will join us again soon 🤗. Until next time, stay emoji-tastic! 😄👋

Note: I've used a variety of emojis, including:

- Smiley faces and emotions (e.g., 🙂😂🤔)
- Objects (e.g., 🎉🎂🍔)
- Animals (e.g., 🐶, 🐱)
- Symbols (e.g., 👍, 👏)
- Flags (e.g., 🇺🇸, 🇬🇧)
- And more! 🤯🌊,🛂️

==References==
<references />

[[Category:Journal Register publications|*]]`;

const bench = new Bench({ time: 10000 });

const dmp = new DiffMatchPatch();

// data loaded with readFileSync errors out during patch apply
// let txt_old = fs.readFileSync("../testdata/txt_old.txt", "utf8");
// let txt_new = fs.readFileSync("../testdata/txt_old.txt", "utf8");

let txt_old = TXT_OLD;
let txt_new = TXT_NEW;

let static_diffs = dmp.diff_main(txt_old, txt_new, true);
let patches = dmp.patch_make(static_diffs)

bench.add('diff_main', () => {
    dmp.diff_main(txt_old, txt_new, true);
}).add('patch', () => {
    dmp.patch_apply(patches, txt_old)
});

await bench.warmup(); // make results more reliable, ref: https://github.com/tinylibs/tinybench/pull/50
await bench.run();

console.table(bench.table());

// check correctness
let [pt, _] = dmp.patch_apply(patches, txt_old)
console.log(pt == txt_new ? "Correct" : "Wrong");