'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "81f28522db473d9139d0d4fb8d614063",
".git/config": "f46f6819cf58a7641587ec59352673b4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d3c389878068de2c73ba413b3a3b1859",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "0a3ee3c42a852ad56d09c549277a4f57",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "397ae70085fb510d5c8eec3fa301094e",
".git/logs/refs/heads/main": "397ae70085fb510d5c8eec3fa301094e",
".git/logs/refs/remotes/origin/main": "283e3fd5582b98d938870c46cf55f5d4",
".git/objects/00/ed81755670f09d63126886b80f622d2a4b88a7": "2418f2878e138a10361ef29a96e3d052",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/07/f965a6769f0618c2a166e57b9197d9633e4ae4": "62b1d20e4db36a16a907b7d4b6d8b441",
".git/objects/0a/93cd4503b73d2c6bca294260d381b14a771768": "1d5cc61dbdd76823dfe644e172a81255",
".git/objects/0f/c002def7ea7650b9b5d0a86962c337fa52066f": "d4ca73c3a07e3bf7d3645f28bd41dd24",
".git/objects/10/4f235da69658b45cefe9684188de1e83a49fe8": "7f2b168f9e6ab6e9f5b8c138154d8968",
".git/objects/13/e45255effee786ae69b09cdb80dbf03cc62213": "59fbed624790c5a923afe3a3acda679d",
".git/objects/13/e8656eec0f4e72bfae24dbd5f01206b6ef3c27": "9d26df77dff9a321bacf0036c32c0bdb",
".git/objects/14/3ceb3f359b1b19d25141e545c289ffd5568215": "613ce5e24777ae0c1c7759609c9b40f2",
".git/objects/1a/c7fed18a58963392314028c4140cf1d5677b5c": "863298d7e1301ab81f956fb0ea29798a",
".git/objects/1c/23d98dd6c7f0196b4edd10686161bbd3584849": "7907cec708188892a2336e62228e6b19",
".git/objects/1d/20a84fda6f9cd4c16d8fb9730303bd6365a751": "e988fa5d2a1da3ae1a869eba3219d0b0",
".git/objects/1e/3284423939d0255334edca2caeba42c94b93d8": "3f0305295dc59722eb99a4649a0ebaef",
".git/objects/20/839825ac778e9a98232facb60c3d419833609c": "220de14bb6fd1c22aa156888c5974726",
".git/objects/21/76c9a7d095372db35470fa3c6163b77c0b4285": "c683e28a924e3825e13618f73413c8c4",
".git/objects/24/1d790089da9a3a8936caf97640c01d28c24dbc": "282763535b457075ea3ef3f7476f3012",
".git/objects/28/1b5754d8c572054f31e950db166e9e4ac1749f": "c9457b33c322ab2e904e7456214a2e54",
".git/objects/28/47612e931d5d6e98709e9baf804fb760382039": "40903c7abc755e2e79f9f2ab504342d8",
".git/objects/28/b14b618d5cf7a1840c4680fee4aafe0ace8145": "dc3cf71fa936ae3e031cdbd343e25b8d",
".git/objects/2a/ee9f6bea4142531e04dc15bcd21b68a07cbde7": "95fb8e0e88d96164d61017937f0be75a",
".git/objects/2e/cca369245791a0b197581dd72c2e08ef0090f4": "3a7a5881e9d05047efe93ebe925c55b5",
".git/objects/2f/fc2e68d8d75fb012acb9c17834493a5ecbfb8e": "1ca1dacfaa8aef595fa7d6adb37f5732",
".git/objects/34/bf8a5e3f7034c6b9656dcc0f1253d09f63e33e": "0f892604a9794e82ddec5a7f27d1d335",
".git/objects/38/bbd2465579e9c850f75f5aee1fcbd18f03f914": "2748f237b4c00cc93fed7e71408a455d",
".git/objects/38/f09a8bbbae64cbb7ae717e74e757c7b2c7a963": "f512566fb06c6f3511d4e26229a52360",
".git/objects/3b/4fed4869e1b1939bade7352ed51151c809b887": "8a9e5a01758585de0badb040f1a5839a",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/3e/69b1720ebec425a25219d704dead563acb5d03": "dc308f688e516e071b675c6eac11e08d",
".git/objects/41/b80c61375dfa5de79bc3e9124542eaa2cf7f1f": "8cf286f143f65c90345337abbe2e6d11",
".git/objects/43/79e9cff1b0b97171b7b52c7902b57738585e78": "2a9f776f686a6f38f6653ab97a3ee049",
".git/objects/44/7b1b235771e2e2e78dddda5c4c6b29d1eea55f": "5ac0adbaa315ba8600ba15133387e1cd",
".git/objects/46/d1b94b8849af019b6fd5c29af419e729ebc198": "1bfddc166d324b9ec6d60da9619e86e8",
".git/objects/47/086b45c334ae16b9045cde57f59c6e217daf5a": "6eac3790129f99e067aab08dbc8fce25",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/122129d2cc5d0a586e1ee3a27653a460a28106": "03ba5bb56f36952150d427ac38198a51",
".git/objects/4b/2883e519b0f44d83ba12f3776bff0f27079628": "5f8775c3a09fff9fbcf7fd29485b2932",
".git/objects/4d/081c53d398e0628c7617abac341989f711dce9": "cd8683596b34093b6764aacb43d87df6",
".git/objects/4e/4c82f29b453d0ef65da07f805e7a451e077b5f": "20e5193f46976fe282d3a5cae0c4cf60",
".git/objects/4f/1d7221c5bba3f5436d37fea488198ed9af6124": "ca3064a5c52a8f1caac16aea67dfba92",
".git/objects/52/b63132a6290eb0a1d00f107c714f05b1ac8a38": "e33b38e3fead19ad43694916ee9ddada",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/57/02f88e6576ce89e4c35b0c1484525c3b1fdc7c": "b379122725eb59860f485a056f1bf2af",
".git/objects/57/bf920ac6218af1fabc3201748e06539ca4ce68": "81499ef3feb0d2409fac268a5c592591",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/5b/492e3e0fd21672bbe87197d697d9e79f1d123f": "c157b0fd9a45cf85220b68ec1fcdbb2f",
".git/objects/5f/3dfb663497173dc56788efcfe8c6c7db757848": "69ea7889feee7bba29b9b972ce361f70",
".git/objects/61/818f6f2ab906b6d7a38ce6e3d3945fec93c5ff": "7981fb741abe7469f95724637acccd4e",
".git/objects/62/380833b11600567d23e98c158c73ad4f9d5cfa": "50db6f07361266b4209842512036d53f",
".git/objects/62/420070826eedaf66334d1cf369766d319143f8": "fdd7d86a3c85892ee52426115be56837",
".git/objects/63/257ca443b49c43b7ebad7c40e5e9ce9a1b2682": "b3d3ffb44ee3d445be5a7e9439f5276d",
".git/objects/63/8e165e6a085753f97b6f8cdcf0095f72ae38f8": "5201af8b9cbe10941e125a9c3b4556ed",
".git/objects/63/ccdd4f1df84de2232dc528f0da5dee7eac96c1": "a2249e88d382736ef0910508d91bea3c",
".git/objects/64/9028d0889cc81661586dd9857227d1a0a4d532": "b9b87d3fd265282773b935d12f0be1db",
".git/objects/65/08e9faf64fa547db998596c3472e779dd6656f": "f138a67c99ccb5b7e05142941685ec89",
".git/objects/68/62a295c1d157a07c44e78a9c615f2e4d2a2401": "32d19bcde363fd61bac0e2d10e17404c",
".git/objects/6c/57f2b0a93264f5f6fc469f1471eb7f9fe289d7": "b5ccce11cada147f560d755d3d026d91",
".git/objects/6d/452b501f3a34530e3eddc87f7e6e4fcd3ff292": "2b363d54f159e6d197def90b156f59e6",
".git/objects/70/e5f058bf5c34041f251aee0634a91535f681b8": "0b98bfebbba8a9ce2d050eae90e9271f",
".git/objects/71/42f0bfe0a4ce1ef37add86e7d80ec57dec783d": "44de57d266d83feabd169c313bfaaa2a",
".git/objects/72/0b1d787f931c3d34413ad04d62e40ed1a31ecb": "01226e8bbcd0168814002e95b5a821d1",
".git/objects/72/518203e9375e2a5205143d0b1df86cb34f2174": "30b1ed879cf00f9fb23faabb1d30ed4e",
".git/objects/73/25b93eb1fb09b76735cc6446724fffaa2af64c": "21ededff473d82613cc5de70aae04d54",
".git/objects/75/78ffa959cafb23a06a19770b0e58c98238e3d3": "fc6e94951da58c53ff9a7a2ebc658949",
".git/objects/76/b845bab0065789aa414698bed9bf61010091b8": "570b40d053bce826608b7e431cda415d",
".git/objects/77/b07bb5d946dfaa583d4d3fbb563ee82273e965": "ac14a7377fcdd1ba11879bb307146446",
".git/objects/78/bede26a5ba70928df20b2f348e936f0ba3f431": "ca18c83e5772ad94dfcf2a68fa6120e9",
".git/objects/79/434916519ec97e0bc51cafcf07ebf6c76223de": "9bff971b6cce8495b1a6fc200ed30820",
".git/objects/79/f38c6801d8e23f2ca22e0f2ab702741acf4a81": "e68cd9dbbc6e381db5861f8e26693088",
".git/objects/7b/970fce3b42e6caf00353366ac4cce6e25fb541": "ff4aa069f44a6d1046485136f3219b87",
".git/objects/7c/3c433cf4c8e39c7382af9787364693cbf499c1": "ab9aecb69752173047fbcf0204fdd960",
".git/objects/81/a33905fd4255bd0f0e5d9f0cca15c4ca7aec04": "bffde4bacfa989fb91a99463ea33f021",
".git/objects/84/4ff8471626ac556bc826a6527d80868cb5b0ea": "c6569143aa35be08b6259f6b79c9fa1c",
".git/objects/85/40290e7808ed21723008d90c932d898fbc88b8": "c6fb428004dd509c8e12fc74746f8d26",
".git/objects/87/a91afad977eca111d2fd86c1817e9af0b494d3": "5ccdca2dbfdf5abb490bed4a11a7d362",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/7a7ff78cb7345df39c67ca960cf541ff887d67": "6f6cd790b95e4bd24934e0a4b757549c",
".git/objects/89/2ec60d59d3e6a6143e90afe09edb2ea73c2d10": "7ac0e44cfacbad73c87b922f2b30aa3c",
".git/objects/89/f0428d99873ea9234dfc1a5475ef67f7730a0d": "eb5afffa5a604cba8157c45d3079abbc",
".git/objects/8b/7862c10060627ac0e873f4ed933d161d4a7de8": "ddab0aa3dad5ce49790f551bf77ad854",
".git/objects/8b/79a8b308f98dc347129359597004df6df97f6b": "0f281425f67ffc52c1159676e338dc98",
".git/objects/8b/83559c1bb8ad8d4ffa6050711faff95cdb6cb7": "c702240694ff5a6b094ef5c8a2e11335",
".git/objects/8d/2f5c28501ea491e36348432e9530599acc311d": "770911129390212bf14a6af369dec291",
".git/objects/91/0a15897452c9b27fcce73955fa67ce05ee9410": "1b6798124acf0dc67a5c67857c85fb9f",
".git/objects/91/59db3041d2211997be850c919f32829d388086": "dcfaded8c05d81591a43c1720d1a8792",
".git/objects/91/7a0daf80ada5dbb0bb03a78304903e1a36fd5b": "e45f446fa3ec0481e6fa9ff59ed7e67b",
".git/objects/91/ebb504c09763d7595532ad882f9c2387216d38": "88565d0dda4202f2469c5b492d755a6c",
".git/objects/93/51e835fcb94360da1d547491fc97f5e2f76a8f": "737aa6b43eb0ee37748a30610faac268",
".git/objects/98/8fa524b4f21fae4200434b951899cd9c5833c2": "db792dc06a71bb4daeec59fa611ee79f",
".git/objects/9a/5ef19ac47dc4466fc0ed02f76e57f40b34ea70": "d997f143042250c8d648cf3aba4893d4",
".git/objects/9d/f5d7d6280223ff1d08c8f5c6ed4e254ac8614b": "6a60b438992cc9e308baa3ba47c26013",
".git/objects/9e/9ce7740c7e0104080c672271ca4c135b4d68a6": "0e7000dfd229b24593573b07b46eeaef",
".git/objects/9f/bb9893ff99aa44bd6183c4f808afc27f7318ff": "4b09b7ade9f6b631245d1c1ec42e20a9",
".git/objects/a0/dbb3c52de45974a99d87a3e16c35d270bf0f7c": "4575ee7f08a56387d00809aec8c4fc73",
".git/objects/a3/9c645083b8691edb9a6cf3824c840b70f63326": "a4b5065314b927b63d1927a31def2122",
".git/objects/a3/ec31a450619f58de63edc44a2ef666dd5db4b2": "654c2e920f6b11153e445c715ac0355f",
".git/objects/aa/5da4f4bc8498dd75517ac82f7a9f02b1bf7a49": "7191e9f67255d597c6501519a98d047a",
".git/objects/ac/1304f52275fb528409da8488c60f5820ba4e9b": "c9b1e47a0fe54c715e4b759ab274bf78",
".git/objects/ac/9632d9b5a6a1b371d6027f48a036b5647fe461": "ea4f189f404a4b47050a0ca4f42bcd30",
".git/objects/b3/512c454087ce7e697de13005badb9f738bbdf8": "1e482a0156d56568c5f2205f8d6b17e4",
".git/objects/b3/e9f376780ad4b9152df5f96bd4d4b6d970e331": "cbc5414760df6c50a4f180fdf8e6f676",
".git/objects/b4/fe68a176cf92f0849e8795c8d9991a2136db91": "15c6b4cbdd3bf879f9af3dcacf849b52",
".git/objects/b7/8f78933c04864c9c11346bae618b2dea54a116": "6c76a0c809c47eef9d5eb657e928cb68",
".git/objects/b9/133b54ca0a7cc4801c8a692df421f1a91503fd": "044f181c26336e1d262ba357f10808aa",
".git/objects/be/ca9c63daa723bb1403f5ab18a195897761c71a": "0ad332264091eed152db575a1d1240f2",
".git/objects/c1/2773100bdb8a61352db018e88b309c25c281db": "7e84d00d29de824876a98dbf95dac9e2",
".git/objects/c1/c3656a520fbd853a0a50adfbef47973484f366": "7d3f7bc9c765c2c0474b2a7340fcd1e1",
".git/objects/c3/cc98bfc4ca2fdb7f6feee4bce0effa8c4d8a14": "f73c23426696873aa2e2fb4e780c1a01",
".git/objects/c4/88bc0f5afb436461748fdafd938d85f63a5289": "01cb8a1d3cbd6dc694b85e00c2748f12",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c8/a44f1626d76129e130b1360f866046a2a70b17": "f2cd308ee3b2a1788593a14fdbbcf2e2",
".git/objects/cb/e4749350194272aca10018d5868bf7f9ab39a2": "b2e4746a9911592b9a8e4bb18704a168",
".git/objects/cc/0973d33e65954d92138919a85490f717183aaf": "d95f78849589dd1c0fdca0bfca0ea345",
".git/objects/cf/9d74470079ca0217b9882e91f9dd620509a3e0": "40611b742f2926addc1b6d528853b72c",
".git/objects/d0/fb2caf99926567306d1d702c1222bb28c1fcc5": "5c677f7aaac4b03eb15f0f7ec9a2f060",
".git/objects/d1/6b3e192c29ccd8a1484438874d9b643cd894c2": "a6f88b99343d24cbb478fe651e8f8496",
".git/objects/d2/8e8ce54ca11cb43c9376b10d438e1cd1c6777b": "d873be0b205a3c984f133b101858df01",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/b3791e3a32b5c1986ae1d06b3363a6c45a3a0a": "c1afdd9a0ecd19d549b3eb7acbc35a24",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/406ebd513234cf05a21c05fd64e2897057e1e0": "e18c9ccd413452939d24cea8fa5adb16",
".git/objects/d9/1126d5834613da32f6dd91a681525c97055be9": "e26dbb66f2b2d4276dc318bf164524d9",
".git/objects/da/c26acbe6fea6b51622bbc43189258b569b5665": "9dd40ebd3506155f1930a5bc549e2cd2",
".git/objects/db/6d3f344a23357f6a8f756095ef98aab2b41728": "c9d34bf95987b276aa79b15291a8895f",
".git/objects/dd/db31e74e33cca555d465985c00340efecb47ca": "ae3e2d05c342b6d18ee5c0f066e9c313",
".git/objects/df/b6eac1e96cf2497c87573ba9cbfc02ac3b8d98": "54a743945f216cb28308a89dff9282c7",
".git/objects/e1/5e9545bfb539bcd2cb22e68c4b0ce9d443ef26": "16866ef40815031cbb02cb8a0740e155",
".git/objects/e1/6d8988b95afd5f8e4acb52095d3df7eee95590": "46f8e32cfb5b744a6183061a6670c930",
".git/objects/e2/4a14cb3c5adf2a8819681bf2d88f2e23032744": "3d2ec7184007cff3c5657472cccdb60d",
".git/objects/e4/c7903483ee301c7f322e22b7aaed56e2263ccf": "76955c107ced6558a85ef2ecca1575be",
".git/objects/e6/31bac97e001a50868194b6e621e237e9c15d84": "24799b72ef6021d1ab33ca0b507b680a",
".git/objects/e6/5c55a5b595e20e25bd59a1c8bd161d5b13e8a3": "a790fab1222de456f3faf3ebd3e8b99d",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/4e68a246a2605ea560d3ca17761bee27c411cc": "9b3b604a52dfa42edaf33221336b60f6",
".git/objects/eb/3c52495b4efacc6d910564a3c823444f31378a": "cf4b5ea94bbcf7650e084735097a2ce1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/53a8c19370ab74893bcee7b1598a5567c3da13": "a2022409f04c67b2887fd35eef9f3e42",
".git/objects/f5/a1d9a9e8b92325d72184cf88518f7de0a3d5b4": "ca32501e7238ce229caa1abaae60af2b",
".git/objects/f5/eb8b7980e27eb08583c097d7bd12ced949dd1e": "a8488845061da28fe0e494f6ee898dc0",
".git/objects/f6/2e8017aa0bf8c0fbc1c7d189f622fa504d820e": "57db30aebb30efc7b6347aeacbfb5107",
".git/objects/f9/eb2c8bf7a69ccc1b35630748e5d17dc90b1563": "9adb8b6d53f951fb349239ea16b2353e",
".git/objects/fb/d5033ba62be1e62466a03a0d5c693769a7b633": "a9dae8f2ccd509792cb17c1c7bd7d2cd",
".git/objects/ff/18201d08c0ae036a1b8758193823a8ea1f7829": "ab52fc49be8a646c8771d46353b983db",
".git/ORIG_HEAD": "8494a765d95326bd84c81005ca76466e",
".git/refs/heads/main": "f366f1c9531648080393d0f58c12ed47",
".git/refs/remotes/origin/main": "f366f1c9531648080393d0f58c12ed47",
"assets/AssetManifest.bin": "9a7e8bba71765c91fe5141d444d15eab",
"assets/AssetManifest.bin.json": "5b8b073a076b98888bef2d0dd7149830",
"assets/AssetManifest.json": "d1085f214c52bb0f2bb57c2d7d90425e",
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
"assets/assets/social_media/twitter.png": "69d4bd7aea0945ba7ff5e77d1752a5d1",
"assets/assets/social_media/youtube.png": "2b5270fc7e50270749881e91da72e984",
"assets/assets/splash_logo.png": "f950d7dd1cbff940227e28eb5bb0da65",
"assets/assets/tos/tos_app.txt": "4bd68be7f72008e16b3e69b30e1a2d9d",
"assets/assets/tos/tos_payments.txt": "956c5ddbaaad73154fccda6f540ac44a",
"assets/assets/tos/tos_web.txt": "3b84b54d0e81ccc3b565d4313d19ee6b",
"assets/FontManifest.json": "08e6c927a377fef4ab8bb76db856982b",
"assets/fonts/MaterialIcons-Regular.otf": "bd6d7acc7f2a525cd86fabb569129ccf",
"assets/lib/env/env.g.dart": "24c459dfbcb2bb0c7c052701e13efd5b",
"assets/NOTICES": "40d8d493930583397c242b3b05575413",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "7227fb927cdc3cfeb28de8b3f44e087d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "6787090e8a425e6d8bd97471e7900eab",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "0731af9f384ae09f7d442dc32e009cc8",
"favicon.ico": "50200ec3e08fb339a86bdba847d3f3c7",
"favicon.png": "cf3ff4401761af0b87e92add54cdb311",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
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
"index.html": "5999ef66034ffb2ee77d0f294295225a",
"/": "5999ef66034ffb2ee77d0f294295225a",
"main.dart.js": "e5795566ac835ffbaaac1e2c04dc6374",
"manifest.json": "afcfab85e853d6369aa31bb5a665ec2b",
"OneSignalSDKWorker.js": "ebb63ca15bba16b550232b0b0f66c726",
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
"version.json": "c2354a30d59636dc044189356e40ff25"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
