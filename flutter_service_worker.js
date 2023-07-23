'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7861fdf36a9227f825bd486a335855f6",
".git/config": "08cd373ef172c01f8e11d57b6d1a3f09",
".git/description": "aef8c14348471b65ce4bc0a7b50e8352",
".git/FETCH_HEAD": "0d48afb9d3ef3536f88543b0249baf41",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b527b08bfd550c0908740895898bece6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d74e9fa67bcb1abba5ae22bc05814415",
".git/logs/refs/heads/main": "d74e9fa67bcb1abba5ae22bc05814415",
".git/logs/refs/remotes/origin/HEAD": "f78161450824d5151daf9b37023a3c85",
".git/logs/refs/remotes/origin/main": "00da3fea1ec0d2264041a37ca84cf435",
".git/objects/00/ed81755670f09d63126886b80f622d2a4b88a7": "2418f2878e138a10361ef29a96e3d052",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/0a/93cd4503b73d2c6bca294260d381b14a771768": "1d5cc61dbdd76823dfe644e172a81255",
".git/objects/0c/839fc1fb38024fca1618aa0fb968a436d01659": "8a7c91153eb245352e034ca6a663c9ae",
".git/objects/11/0e049ceccaf8523c9fc606edabdfdd42e7bae1": "e4acf0c33cc023af5ef54383ab51d426",
".git/objects/12/1aa75a9a73707208aa9e08e16fc191cce21540": "a07a38ea1b7a20511e6abdc7ca133325",
".git/objects/14/3ceb3f359b1b19d25141e545c289ffd5568215": "613ce5e24777ae0c1c7759609c9b40f2",
".git/objects/17/ddbca9f087e3d9ebb0b38a4dd0d1b0088941a7": "6600d442c402e96e8f73b5c66d9c9e5e",
".git/objects/1d/20a84fda6f9cd4c16d8fb9730303bd6365a751": "e988fa5d2a1da3ae1a869eba3219d0b0",
".git/objects/1e/3284423939d0255334edca2caeba42c94b93d8": "3f0305295dc59722eb99a4649a0ebaef",
".git/objects/20/839825ac778e9a98232facb60c3d419833609c": "220de14bb6fd1c22aa156888c5974726",
".git/objects/21/76c9a7d095372db35470fa3c6163b77c0b4285": "c683e28a924e3825e13618f73413c8c4",
".git/objects/28/47612e931d5d6e98709e9baf804fb760382039": "40903c7abc755e2e79f9f2ab504342d8",
".git/objects/2a/ee9f6bea4142531e04dc15bcd21b68a07cbde7": "95fb8e0e88d96164d61017937f0be75a",
".git/objects/2b/41a9034d45afd7c56c7f18f40be06f9f9d14da": "cadbb297bd6a53b9a5fdbf750d68905d",
".git/objects/2e/cca369245791a0b197581dd72c2e08ef0090f4": "3a7a5881e9d05047efe93ebe925c55b5",
".git/objects/2f/0cad3faf0970f73a44dbfef458feaae58e31b0": "9253e9f8499164f4f795dcf60ba578bd",
".git/objects/34/bf8a5e3f7034c6b9656dcc0f1253d09f63e33e": "0f892604a9794e82ddec5a7f27d1d335",
".git/objects/3b/4fed4869e1b1939bade7352ed51151c809b887": "8a9e5a01758585de0badb040f1a5839a",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/41/03f09544bcaa8a2b0dd053d2abfb55ccafea3b": "816aace708e007f194b404e1efabacd5",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/b80c61375dfa5de79bc3e9124542eaa2cf7f1f": "8cf286f143f65c90345337abbe2e6d11",
".git/objects/44/7b1b235771e2e2e78dddda5c4c6b29d1eea55f": "5ac0adbaa315ba8600ba15133387e1cd",
".git/objects/4f/1d7221c5bba3f5436d37fea488198ed9af6124": "ca3064a5c52a8f1caac16aea67dfba92",
".git/objects/52/b63132a6290eb0a1d00f107c714f05b1ac8a38": "e33b38e3fead19ad43694916ee9ddada",
".git/objects/57/02f88e6576ce89e4c35b0c1484525c3b1fdc7c": "b379122725eb59860f485a056f1bf2af",
".git/objects/57/bf920ac6218af1fabc3201748e06539ca4ce68": "81499ef3feb0d2409fac268a5c592591",
".git/objects/61/818f6f2ab906b6d7a38ce6e3d3945fec93c5ff": "7981fb741abe7469f95724637acccd4e",
".git/objects/62/380833b11600567d23e98c158c73ad4f9d5cfa": "50db6f07361266b4209842512036d53f",
".git/objects/62/420070826eedaf66334d1cf369766d319143f8": "fdd7d86a3c85892ee52426115be56837",
".git/objects/63/257ca443b49c43b7ebad7c40e5e9ce9a1b2682": "b3d3ffb44ee3d445be5a7e9439f5276d",
".git/objects/64/9028d0889cc81661586dd9857227d1a0a4d532": "b9b87d3fd265282773b935d12f0be1db",
".git/objects/64/b40da386d8db2c468d31d422b609fc214ca426": "87b9feef68b36660b1c30e38ff04ee3b",
".git/objects/65/08e9faf64fa547db998596c3472e779dd6656f": "f138a67c99ccb5b7e05142941685ec89",
".git/objects/6d/452b501f3a34530e3eddc87f7e6e4fcd3ff292": "2b363d54f159e6d197def90b156f59e6",
".git/objects/70/e5f058bf5c34041f251aee0634a91535f681b8": "0b98bfebbba8a9ce2d050eae90e9271f",
".git/objects/71/42f0bfe0a4ce1ef37add86e7d80ec57dec783d": "44de57d266d83feabd169c313bfaaa2a",
".git/objects/71/cfffad33e575d6d0998f2ae03e76db2a348094": "6bcc41e1347fd293f133a1e0c154fe50",
".git/objects/72/518203e9375e2a5205143d0b1df86cb34f2174": "30b1ed879cf00f9fb23faabb1d30ed4e",
".git/objects/73/25b93eb1fb09b76735cc6446724fffaa2af64c": "21ededff473d82613cc5de70aae04d54",
".git/objects/76/b845bab0065789aa414698bed9bf61010091b8": "570b40d053bce826608b7e431cda415d",
".git/objects/78/bede26a5ba70928df20b2f348e936f0ba3f431": "ca18c83e5772ad94dfcf2a68fa6120e9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/f38c6801d8e23f2ca22e0f2ab702741acf4a81": "e68cd9dbbc6e381db5861f8e26693088",
".git/objects/7b/970fce3b42e6caf00353366ac4cce6e25fb541": "ff4aa069f44a6d1046485136f3219b87",
".git/objects/7c/3c433cf4c8e39c7382af9787364693cbf499c1": "ab9aecb69752173047fbcf0204fdd960",
".git/objects/80/40438788ebf6c0f28bb1a7b1c440b5dd54e5d8": "7359d6ab98aa82036d55a9e40f326f61",
".git/objects/83/c75a196c34569245fa8eb9f29c96c3c90e4b4a": "10e67b08aa8ea2ad0b30e40176b11734",
".git/objects/84/4ff8471626ac556bc826a6527d80868cb5b0ea": "c6569143aa35be08b6259f6b79c9fa1c",
".git/objects/85/40290e7808ed21723008d90c932d898fbc88b8": "c6fb428004dd509c8e12fc74746f8d26",
".git/objects/87/a91afad977eca111d2fd86c1817e9af0b494d3": "5ccdca2dbfdf5abb490bed4a11a7d362",
".git/objects/89/2ec60d59d3e6a6143e90afe09edb2ea73c2d10": "7ac0e44cfacbad73c87b922f2b30aa3c",
".git/objects/89/f0428d99873ea9234dfc1a5475ef67f7730a0d": "eb5afffa5a604cba8157c45d3079abbc",
".git/objects/8b/7862c10060627ac0e873f4ed933d161d4a7de8": "ddab0aa3dad5ce49790f551bf77ad854",
".git/objects/8b/79a8b308f98dc347129359597004df6df97f6b": "0f281425f67ffc52c1159676e338dc98",
".git/objects/8b/83559c1bb8ad8d4ffa6050711faff95cdb6cb7": "c702240694ff5a6b094ef5c8a2e11335",
".git/objects/8c/13b0c9df2b15fa55423db3d9b425b3fc23d09b": "7c3583cf33aa2b069dca26d0a47123c8",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/2f5c28501ea491e36348432e9530599acc311d": "770911129390212bf14a6af369dec291",
".git/objects/91/0a15897452c9b27fcce73955fa67ce05ee9410": "1b6798124acf0dc67a5c67857c85fb9f",
".git/objects/91/59db3041d2211997be850c919f32829d388086": "dcfaded8c05d81591a43c1720d1a8792",
".git/objects/91/ebb504c09763d7595532ad882f9c2387216d38": "88565d0dda4202f2469c5b492d755a6c",
".git/objects/93/51e835fcb94360da1d547491fc97f5e2f76a8f": "737aa6b43eb0ee37748a30610faac268",
".git/objects/9d/d85fec2da4bb25bc19c9464d090c9fc0f14694": "19e2b8452a7a6a059b6f3c68fedac006",
".git/objects/9d/f5d7d6280223ff1d08c8f5c6ed4e254ac8614b": "6a60b438992cc9e308baa3ba47c26013",
".git/objects/9e/9ce7740c7e0104080c672271ca4c135b4d68a6": "0e7000dfd229b24593573b07b46eeaef",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/9c645083b8691edb9a6cf3824c840b70f63326": "a4b5065314b927b63d1927a31def2122",
".git/objects/a3/ec31a450619f58de63edc44a2ef666dd5db4b2": "654c2e920f6b11153e445c715ac0355f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/1304f52275fb528409da8488c60f5820ba4e9b": "c9b1e47a0fe54c715e4b759ab274bf78",
".git/objects/ac/9632d9b5a6a1b371d6027f48a036b5647fe461": "ea4f189f404a4b47050a0ca4f42bcd30",
".git/objects/ac/cf8ac4f21cf8543d4dc7fa6d0c6ddc685b5468": "219571c7867c9adfba3ce28de8f744a0",
".git/objects/ae/5ccfd7ad08910a6e2694b6e98f720da5d9ff55": "bdfef247a03361c55b87e83cdf4ec7e0",
".git/objects/b3/512c454087ce7e697de13005badb9f738bbdf8": "1e482a0156d56568c5f2205f8d6b17e4",
".git/objects/b3/e9f376780ad4b9152df5f96bd4d4b6d970e331": "cbc5414760df6c50a4f180fdf8e6f676",
".git/objects/b4/fe68a176cf92f0849e8795c8d9991a2136db91": "15c6b4cbdd3bf879f9af3dcacf849b52",
".git/objects/b7/8f78933c04864c9c11346bae618b2dea54a116": "6c76a0c809c47eef9d5eb657e928cb68",
".git/objects/b9/133b54ca0a7cc4801c8a692df421f1a91503fd": "044f181c26336e1d262ba357f10808aa",
".git/objects/be/ca9c63daa723bb1403f5ab18a195897761c71a": "0ad332264091eed152db575a1d1240f2",
".git/objects/c1/2773100bdb8a61352db018e88b309c25c281db": "7e84d00d29de824876a98dbf95dac9e2",
".git/objects/c1/c3656a520fbd853a0a50adfbef47973484f366": "7d3f7bc9c765c2c0474b2a7340fcd1e1",
".git/objects/c4/88bc0f5afb436461748fdafd938d85f63a5289": "01cb8a1d3cbd6dc694b85e00c2748f12",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c8/a44f1626d76129e130b1360f866046a2a70b17": "f2cd308ee3b2a1788593a14fdbbcf2e2",
".git/objects/d0/fb2caf99926567306d1d702c1222bb28c1fcc5": "5c677f7aaac4b03eb15f0f7ec9a2f060",
".git/objects/d1/6b3e192c29ccd8a1484438874d9b643cd894c2": "a6f88b99343d24cbb478fe651e8f8496",
".git/objects/d7/406ebd513234cf05a21c05fd64e2897057e1e0": "e18c9ccd413452939d24cea8fa5adb16",
".git/objects/d9/1126d5834613da32f6dd91a681525c97055be9": "e26dbb66f2b2d4276dc318bf164524d9",
".git/objects/da/c26acbe6fea6b51622bbc43189258b569b5665": "9dd40ebd3506155f1930a5bc549e2cd2",
".git/objects/db/09d1704f274fc776441576424caabf22ec2565": "94d61da7a0ac4f604420bce786ea9301",
".git/objects/db/6d3f344a23357f6a8f756095ef98aab2b41728": "c9d34bf95987b276aa79b15291a8895f",
".git/objects/dd/db31e74e33cca555d465985c00340efecb47ca": "ae3e2d05c342b6d18ee5c0f066e9c313",
".git/objects/df/6d475c606147a7f5dd5086f315ea8864d50950": "d10acc8651a7736992c19845e12ebefa",
".git/objects/df/b6eac1e96cf2497c87573ba9cbfc02ac3b8d98": "54a743945f216cb28308a89dff9282c7",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/e1/5e9545bfb539bcd2cb22e68c4b0ce9d443ef26": "16866ef40815031cbb02cb8a0740e155",
".git/objects/e1/6d8988b95afd5f8e4acb52095d3df7eee95590": "46f8e32cfb5b744a6183061a6670c930",
".git/objects/e3/3c417969fe2351a03948b9f2ca2b677cb183e1": "864e0390c63516cd88787b2ad724e7e5",
".git/objects/e4/c7903483ee301c7f322e22b7aaed56e2263ccf": "76955c107ced6558a85ef2ecca1575be",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/31bac97e001a50868194b6e621e237e9c15d84": "24799b72ef6021d1ab33ca0b507b680a",
".git/objects/e7/4e68a246a2605ea560d3ca17761bee27c411cc": "9b3b604a52dfa42edaf33221336b60f6",
".git/objects/ea/75c49f0a1812d74ec172066dc65b03ed3b1cdf": "611bc9e1d398d8cf3d42b57de9731857",
".git/objects/fb/4dc4e101c5ca3016e16efa5bb4ff54aec7dcf9": "19a8f3d9b2da6a0ccb6ae9f63777c4af",
".git/objects/ff/18201d08c0ae036a1b8758193823a8ea1f7829": "ab52fc49be8a646c8771d46353b983db",
".git/refs/heads/main": "51489538d72822f0ad0cb28835ed1198",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "51489538d72822f0ad0cb28835ed1198",
"assets/AssetManifest.json": "256344d0e8729be2005b533b4d8ef8ee",
"assets/assets/app_icon.png": "8080666835e0662a46d36dbdc35ed086",
"assets/assets/dev/logo_orange_512.png": "106f399b391ff8578eceb65eeb25ecfa",
"assets/assets/dev/mettacode_application_brand.png": "678f5b20ff1e34d9bc2e7127dd2463f3",
"assets/assets/dev/mettacode_application_brand_slim.png": "d853b4379aa309ca2eeb4bc740a6f684",
"assets/assets/fonts/Wanted.ttf": "88953b2a68cb82684000502668d3ab3a",
"assets/assets/fonts/Wantedo.ttf": "9f872a2ac377884f27f9161cd0fd4358",
"assets/assets/icon_star/icon_b.png": "0ba34d0eb7713353c00adb03c0b70eee",
"assets/assets/icon_star/icon_bw.png": "e4f1cbdac98ed20396dde2a7b50d73fa",
"assets/assets/icon_star/icon_plus_symbol.png": "9980f40a42aca7318c5b2c540bb7c909",
"assets/assets/icon_star/icon_star.png": "8080666835e0662a46d36dbdc35ed086",
"assets/assets/icon_star/icon_star_b.png": "c534ab8ae313a800dc7c4645ea247cf4",
"assets/assets/icon_star/icon_star_bw.png": "f950d7dd1cbff940227e28eb5bb0da65",
"assets/assets/other_logos/android_apk_badge.png": "4e2c8eeda2efaa694b3283175ac9adfc",
"assets/assets/other_logos/bitcoin.png": "8227f2b9f0fcef8b588cecd9b1bcae7a",
"assets/assets/other_logos/cashapp.png": "42dec4b15db727eedbb9a12c3f5169e2",
"assets/assets/other_logos/ethereum.png": "e37e8eae3fc42945b7fd904d18ac54f2",
"assets/assets/other_logos/google_play_badge.png": "1a9453063dc4ab95fc0cd62b9c1a095e",
"assets/assets/other_logos/ios_app_store_badge.png": "362c61de9a60dcf6b1f2e9732c5d7205",
"assets/assets/other_logos/litecoin.png": "1752b6f6b63f71a75bd472dabad939d6",
"assets/assets/other_logos/spotify_listen_600.png": "34edd648568473090de94112ded39bdc",
"assets/assets/other_logos/venmo.png": "bdfa9632d227044c5cbbfcdf8f640f03",
"assets/assets/other_logos/windows_store_badge.png": "486a0de58c132ee4a9e4b43dc7368857",
"assets/assets/photos/wanted0.png": "ab7be53af3ca744cb5ad3365f776bed6",
"assets/assets/photos/wanted1.png": "5e30a1576fa06dc97abd315f343c30ba",
"assets/assets/photos/wanted2.png": "0ea8914095a6505b94123c4fafd6cd0d",
"assets/assets/photos/world_map.png": "849715edc6a57842819b6e6a07077005",
"assets/assets/social_media/facebook.png": "3e541fe022037cb156e74270120236d2",
"assets/assets/social_media/instagram.png": "12965f33f5982686f6eb63d51073722b",
"assets/assets/social_media/rumble.png": "ac190ef9e408a63f854a7003ee8775b2",
"assets/assets/social_media/soundcloud.png": "9122303753ad079015ccaf0e0cb3a25a",
"assets/assets/social_media/tiktok.png": "a3352efadc94a5ab0d11173dcaa7d7a5",
"assets/assets/social_media/twitter.png": "401933ef36430ac6d3fdf0e100d5dd71",
"assets/assets/social_media/youtube.png": "2b5270fc7e50270749881e91da72e984",
"assets/assets/splash_logo.png": "f950d7dd1cbff940227e28eb5bb0da65",
"assets/assets/tos/tos_app.txt": "4bd68be7f72008e16b3e69b30e1a2d9d",
"assets/assets/tos/tos_payments.txt": "956c5ddbaaad73154fccda6f540ac44a",
"assets/assets/tos/tos_web.txt": "3b84b54d0e81ccc3b565d4313d19ee6b",
"assets/FontManifest.json": "abb1140170cc1fed0a7c405bc52485ae",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/lib/env/env.g.dart": "ee1fee75e386686962b29b992a6dc9dc",
"assets/NOTICES": "5999680ad7ca6d4ae86a1e5099f19b3a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.ico": "50200ec3e08fb339a86bdba847d3f3c7",
"favicon.png": "cf3ff4401761af0b87e92add54cdb311",
"icons/android-chrome-192x192.png": "cf3ff4401761af0b87e92add54cdb311",
"icons/android-chrome-512x512.png": "7557f1fa2ff0df61b543cac0c12bd618",
"icons/android-icon-144x144.png": "64566d2daa820c6cd9222e55d0be103e",
"icons/android-icon-192x192.png": "33aa67b0a1c9b07614fba0c6c67c70f3",
"icons/android-icon-36x36.png": "2e737186010d7e03b23a5c4938860cbf",
"icons/android-icon-48x48.png": "29ac9e318e80cb9854cf4c8cfbb5e15c",
"icons/android-icon-72x72.png": "5309da5e6cf18f66c52f784521ec7acd",
"icons/android-icon-96x96.png": "3d685085f473a393a59ba1fc8762e197",
"icons/apple-icon-114x114.png": "f308895c729682f11622c561dad39316",
"icons/apple-icon-120x120.png": "8b91f9502d9c723934e18f3b09a71784",
"icons/apple-icon-144x144.png": "64566d2daa820c6cd9222e55d0be103e",
"icons/apple-icon-152x152.png": "d31a60627b18f59c006a26eb4f61c2c6",
"icons/apple-icon-180x180.png": "e0e3212dda939ad319a186122b7b5c22",
"icons/apple-icon-57x57.png": "3320ad0e4a1f418b8edc52f75a143279",
"icons/apple-icon-60x60.png": "9e6333239b20910f38b61190d4a8141a",
"icons/apple-icon-72x72.png": "5309da5e6cf18f66c52f784521ec7acd",
"icons/apple-icon-76x76.png": "0a80435a2f37214e0d3f976f6f173c5c",
"icons/apple-icon-precomposed.png": "2f96704c4ea2f040f57d16ebd6e3bf5d",
"icons/apple-icon.png": "2f96704c4ea2f040f57d16ebd6e3bf5d",
"icons/apple-touch-icon.png": "5061f87769deb88fb8616196b698a72e",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "1b99404c0ca6d6cf0a579a152210794d",
"icons/favicon-32x32.png": "a892d1857c9374eb69e67308ef5b574c",
"icons/favicon-96x96.png": "e98a299b4b1bbe72814bf6ed2ea757d6",
"icons/favicon.ico": "50200ec3e08fb339a86bdba847d3f3c7",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "64566d2daa820c6cd9222e55d0be103e",
"icons/ms-icon-150x150.png": "911e6ade29eb9dd888d35646e4b64bf7",
"icons/ms-icon-310x310.png": "356b0a78594ee55ac138db2b04955c0a",
"icons/ms-icon-70x70.png": "a7c4b243ce03a5743d6e12288ffddde8",
"index.html": "1dc53bf04f93d2a9e391f01cf12a0738",
"/": "1dc53bf04f93d2a9e391f01cf12a0738",
"main.dart.js": "aaade01fab524153193992217c6f0052",
"manifest.json": "afcfab85e853d6369aa31bb5a665ec2b",
"README.md": "f42e536ac914e916a573000ff00bfb87",
"splash/img/branding-1x.png": "82e1c8d503aea1bcc402598ddde539e3",
"splash/img/branding-2x.png": "38e6a29fee3f18a42c360f36d6c3c055",
"splash/img/branding-3x.png": "defe43e3262aab6d352c70bab4fc18d4",
"splash/img/branding-4x.png": "db9231b604ab4b29af0d25f70e4ed864",
"splash/img/branding-dark-1x.png": "82e1c8d503aea1bcc402598ddde539e3",
"splash/img/branding-dark-2x.png": "38e6a29fee3f18a42c360f36d6c3c055",
"splash/img/branding-dark-3x.png": "defe43e3262aab6d352c70bab4fc18d4",
"splash/img/branding-dark-4x.png": "db9231b604ab4b29af0d25f70e4ed864",
"splash/img/dark-1x.png": "e55b0bfb5c57a0eb683a06f1e1f83974",
"splash/img/dark-2x.png": "a60d3fd51e39420c5943c6e735e9ae93",
"splash/img/dark-3x.png": "807b0e741d7ec982b94343692f1a9684",
"splash/img/dark-4x.png": "d16e591df89fa15bbdf80a2936440040",
"splash/img/light-1x.png": "e55b0bfb5c57a0eb683a06f1e1f83974",
"splash/img/light-2x.png": "a60d3fd51e39420c5943c6e735e9ae93",
"splash/img/light-3x.png": "807b0e741d7ec982b94343692f1a9684",
"splash/img/light-4x.png": "d16e591df89fa15bbdf80a2936440040",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "962873915b7f18af608bfa3f86550405",
"version.json": "b73e2865c6f31a57246fa809ee5e2ec8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
