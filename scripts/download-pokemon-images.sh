#!/bin/sh
set -eu

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
OUTPUT_DIR="$SCRIPT_DIR/../assets/pokemon"
mkdir -p "$OUTPUT_DIR"

download() {
  filename=$1
  url=$2
  destination="$OUTPUT_DIR/$filename"
  if [ -s "$destination" ]; then
    printf 'skip: %s\n' "$filename"
    return
  fi
  printf 'download: %s\n' "$filename"
  curl --fail --location --retry 2 --silent --show-error "$url" --output "$destination"
}

download "eevee.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/326507f5595907c72d74ac8ea686a6ce.png"
download "charmander.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/89953014f442146518ef45787d9bb0a4.png"
download "squirtle.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/17388b7f608671656716ab509ee0fa05.png"
download "pikachu.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/5bb0cfd44302cd4df0c0c88d37457931.png"
download "chikorita.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/cf70c6be9a81972f5d18b93dedcb456e.png"
download "vanillite.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/30f385ad84ad0ee556869c19c50f6cfd.png"
download "machop.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/42a46a9122314e4a17dd3c1fd33443eb.png"
download "ekans.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/ec956e46baa764b9c939d6838c7becab.png"
download "sandshrew.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/fbb27992c96a394d5fda6ba4fbb336f2.png"
download "rookidee.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/5a074f6791bfbc7a0a439317f2d4c8ff.png"
download "abra.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/6f85978431106f04ac85dfea54541238.png"
download "caterpie.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/e97edb1243b8cb641186391489eaf2ee.png"
download "sudowoodo.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/2aef8cf16d4c7ff4e1a0681b1cd3b92e.png"
download "misdreavus.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/45fdafeb3d55a3b9f2270b978abfcb48.png"
download "axew.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/f7b866e039b14cbbc73f86140da02152.png"
download "zorua.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/b0be3aa7a4f051c56b9c65673c449343.png"
download "klink.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/b0831d5d6be60c23b3638afcd91678a4.png"
download "sylveon.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/d4c0134c677c262ed8c8f8b14862891c.png"
download "oshawott.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/5c813f04469bd883e06845a4818d28fa.png"
download "froakie.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/d247e9acd713c345b9fc3ffa4562a18f.png"
download "dedenne.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/bee4835ffefe617d28f4bc33af200806.png"
download "psyduck.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/2d71923469a502af868dfd337853964a.png"
download "fuecoco.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/35b032c7a72b72f1024247b894201779.png"
download "skeledirge.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/d250523e7fd48afbd9da2807a55d0cbe.png"
download "dragonite.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/44b8a5591aa246b6a3aa1572481a8c6d.png"
download "mewtwo.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/ecad7b051d99374b56298a49985c071c.png"
download "lugia.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/58086b0e34ef067d50ccdb6dce630afb.png"
download "kyogre.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/7521d3369da8ddfca9be14fa74cf6c2b.png"
download "groudon.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/45d077caac375975f6e77246fd9a72f0.png"
download "rayquaza.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/85fbbb44dd266379ee08caac27d89648.png"
download "dialga.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/e6bd5cf582326a8dff1786d4c440704c.png"
download "palkia.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/1e9419e1a5e34ba2df89b741988ad79f.png"
download "zacian.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/8549935dbc25a0124aaa619f70bbd397.png"
download "bulbasaur.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/7b705082db2e24dd4ba25166dac84e0a.png"
download "vulpix.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/513db9297ba760b90348456cb223c796.png"
download "mareep.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/ad3da5d4e070747919982e322fcdad93.png"
download "riolu.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/97cf3f3e791c8c564e57a0dac30687d0.png"
download "diglett.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/ecbbc6139f4008140facd5a3b2f99a36.png"
download "munchlax.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/eed1030b09de863d9bfbbd5a2a28fdca.png"
download "mimikyu.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/22d30eb50e268fb60a30f5576e9d3fbd.png"
download "turtwig.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/d784d1e76928a24c3b51fed30cf598fe.png"
download "torchic.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/3781d286ec5448b58439e7f069a357c4.png"
download "snorlax.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/4f8f7ac059b4b366f8d6e2875597e277.png"
download "chespin.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/ba9e8106f35e3fda41ed1d466f7f8649.png"
download "ceruledge.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/191231aa2324147093bfbb488c460eca.png"
download "snivy.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/b9c52a61fc071ad9e00ef6aabe87bee2.png"
download "quaquaval.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/34ca274db0578e49df66240f6352663f.png"
download "charizard.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/42062cbeca16839af3efe8a7d61ceb27a30f758b.png"
download "meowscarada.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/206a2a23ac34cac73cb747316763b19d.png"
download "seedot.png" "https://zukan.pokemon.co.jp/zukan-api/up/images/index/e4ff08120b4329ddef9896c4b44a6cf0.png"

printf 'done: %s\n' "$OUTPUT_DIR"
