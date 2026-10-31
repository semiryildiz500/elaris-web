import type { BlogPost } from "@/lib/blog";

/**
 * ELARIS Blog / Journal yazıları — tek veri kaynağı.
 *
 * Yeni yazı eklemek için aşağıdaki diziye bir nesne ekleyin; sayfa kodu gerekmez.
 * Kapak ve içerik görselleri /public/blog/ altına konur (örn. "/blog/kapak.jpg").
 * TR için `tr`, EN için `en` alanını doldurun; boş bırakılan dilde yazı listelenmez.
 * Yayın tarihi gelecekteyse veya `published: false` ise yazı yayınlanmaz.
 *
 * Örnek (kopyalayıp doldurun):
 *
 * {
 *   slug: "yazi-slug",
 *   category: "farkindalik",
 *   publishedAt: "2026-11-05",
 *   readingMinutes: 5,
 *   coverImage: "/blog/yazi-slug-kapak.jpg",
 *   relatedServices: ["ozdeger-ozsevgi"],
 *   tr: {
 *     title: "...",
 *     excerpt: "...",
 *     coverAlt: "...",
 *     content: [
 *       { type: "p", text: "..." },
 *       { type: "h2", text: "Ara başlık" },
 *       { type: "quote", text: "..." },
 *       { type: "image", src: "/blog/gorsel.jpg", alt: "...", caption: "..." },
 *       { type: "list", items: ["...", "..."] },
 *     ],
 *   },
 *   en: { ... },
 * },
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "enerji-calismasi-nedir-ne-degildir",
    category: "enerji-calismalari",
    publishedAt: "2026-10-31",
    readingMinutes: 7,
    tr: {
      title: "Enerji Çalışması Nedir, Ne Değildir?",
      excerpt:
        "Kadim enerji haritalarından günümüz enerji çalışmalarına farklı bir bakış",
      coverAlt: "",
      seoTitle: "Enerji Çalışması Nedir, Ne Değildir?",
      seoDescription:
        "Enerji çalışması, çakralar, nadiler ve enerjetik beden kavramlarına kadim öğretiler ve modern farkındalık perspektifinden ELARIS yaklaşımı.",
      content: [
        {
          type: "p",
          text: "“Enerji çalışması” dediğimizde aslında neyi kastediyoruz? Birinin enerjimizi temizlemesini mi, çakralarımızın açılmasını mı, üzerimizde biriken negatif enerjinin uzaklaştırılmasını mı?",
        },
        {
          type: "p",
          text: "Bugün spiritüel dünyada enerjiyle ilgili kullandığımız dil öylesine genişledi ki, binlerce yıllık farklı öğretiler bazen birkaç popüler kavramın içine sıkışabiliyor. Oysa enerji çalışmasını anlamak için biraz geriye gitmek gerekir.",
        },
        {
          type: "p",
          text: "Çakralar, nadiler ve prana modern spiritüel dünyanın ürettiği kavramlar değildir; farklı dönemlerde gelişmiş Hint yoga ve Tantra geleneklerinin daha geniş insan ve bilinç anlayışlarının parçalarıdır. Özellikle MS 8. ile 10. yüzyıllar arasında bazı Hindu ve Budist Tantrik geleneklerde kanallar, merkezler ve içsel akışlardan oluşan ayrıntılı süptil beden sistemlerinin belirginleştiğini görüyoruz.",
        },
        { type: "h2", text: "Enerjetik beden nedir?" },
        {
          type: "p",
          text: "Bazı kadim öğretilerde insan yalnızca görünen fiziksel bedenden ibaret kabul edilmez. İnsanın nefesi, dikkati, zihni ve içsel deneyimiyle ilişkili farklı beden ve bilinç haritaları geliştirilmiştir. Bugün sıklıkla “enerjetik beden” veya “süptil beden” dediğimiz kavram da bu geleneksel haritalarla ilişkilidir.",
        },
        {
          type: "p",
          text: "Burada önemli bir ayrım var: Enerjetik beden, modern anatominin tarif ettiği fiziksel bir organ sistemi değildir. Onu, bazı kadim geleneklerin insanın içsel deneyimini anlamlandırmak için kullandığı bir harita olarak düşünebiliriz.",
        },
        {
          type: "p",
          text: "Tantrik geleneklerde bu haritanın içinde nāḍī adı verilen kanallar, cakra adı verilen merkezler ve prāṇa kavramıyla ifade edilen yaşam enerjisi karşımıza çıkar. Bu sistemler tarih boyunca tek biçimli kalmamış, farklı geleneklerde farklı şekillerde gelişmiştir.",
        },
        { type: "h2", text: "Peki çakralar gerçekten açılıp kapanır mı?" },
        {
          type: "p",
          text: "Çakralar hakkında bugün en sık duyduğumuz ifadelerden biri “Çakram kapandı.” Ardından doğal olarak şu soru geliyor: “Nasıl açabilirim?”",
        },
        {
          type: "p",
          text: "Fakat kadim kaynaklarda, bugünün sosyal medya dilindeki kadar standart bir sistemle karşılaşmayız. Tarih boyunca dört, altı, yedi veya başka sayılarda merkezlerden söz eden farklı çakra sistemleri kullanılmıştır. Batı’da çok tanınan doğrusal çakra modelinin gelişimi de uzun ve katmanlıdır.",
        },
        {
          type: "p",
          text: "Bu nedenle çakraları yalnızca “açık” veya “kapalı” diye değerlendirmek, çok daha geniş bir öğretiyi iki kelimeye indirgemek olabilir. Elaris’te çakralara birer düğme gibi yaklaşmıyorum.",
        },
        {
          type: "quote",
          text: "Benim için daha anlamlı soru “Hangi çakram kapalı?” değil, “Enerjetik haritada şu anda hangi tema benim için daha fazla farkındalık istiyor?” sorusudur.",
        },
        { type: "h2", text: "Nadiler: Enerjetik bedenin kanalları" },
        {
          type: "p",
          text: "Enerjetik beden öğretisinin daha az konuşulan ama önemli kavramlarından biri nadilerdir. Nāḍī kelimesi kanal veya akış yolu anlamlarıyla ilişkilendirilir. Yoga ve Tantra geleneklerinin bazı süptil beden sistemlerinde nadiler, prananın hareket ettiği kanallar olarak tasvir edilir. Bu sistemlerin anlatımı ve kanal sayıları da kaynaklara göre değişir.",
        },
        {
          type: "p",
          text: "Özellikle üç isimle sık karşılaşırız: İda, Pingala ve Sushumna. Sushumna merkezi kanal olarak ele alınırken İda ve Pingala, merkezi hattın çevresinde farklı niteliklerle ilişkilendirilen iki önemli kanal olarak anlatılır.",
        },
        {
          type: "p",
          text: "Burada da aynı ayrımı korumak gerekir: Bunlar modern anatominin damarları veya sinirleri değil, belirli geleneklerin süptil beden anlayışına ait kavramlardır. Belki de tam burada enerji çalışmalarını anlamamız için önemli bir kapı açılır.",
        },
        { type: "h2", text: "Enerji çalışması ne değildir?" },
        {
          type: "p",
          text: "Enerji çalışması, bir kişinin gelip hayatınızdaki bütün sorunları sizin yerinize çözmesi değildir. Bir başkasının size “enerji vermesi” ve sonrasında her şeyin kendiliğinden değişmesi olarak da görülmemelidir.",
        },
        {
          type: "p",
          text: "Hiçbir enerji çalışması sizin yerinize seçim yapamaz, sınır koyamaz, bir ilişkiyi bitiremez veya yeni bir hayata başlayamaz.",
        },
        {
          type: "p",
          text: "Enerji çalışmaları tıbbi veya psikolojik tanı ve tedavinin alternatifi değildir. Yaşadığımız her fiziksel belirtiyi, ilişki problemini veya hayatımızdaki her zorluğu bir “enerji blokajı” ile açıklamak da doğru değildir. Enerjetik harita bize bir bakış alanı sunabilir; fakat hayatın tamamını açıklayan tek harita değildir.",
        },
        { type: "h2", text: "O zaman enerji çalışması nedir?" },
        {
          type: "p",
          text: "Elaris’te enerji çalışmasına benim baktığım yer tam burada başlıyor. Enerjetik beden, çakralar, nefes, meditasyon, semboller ve farklı farkındalık uygulamaları birer çalışma aracı olabilir. Fakat merkezde yöntem değil, insanın kendisi vardır.",
        },
        {
          type: "p",
          text: "Çünkü bazen bir çalışmada ortaya çıkan en önemli şey büyük, mistik bir deneyim değildir. Bazen yalnızca daha önce fark etmediğimiz bir şeyi görürüz:",
        },
        {
          type: "list",
          items: [
            "Sürekli verdiğim hâlde almakta zorlandığımı…",
            "Bir ilişkinin çoktan bitmesine rağmen hâlâ oraya dikkat ve enerji taşıdığımı…",
            "Hayatımda bolluk istediğimi söylerken almaya ne kadar izin verdiğimi…",
            "Görünür olmak istediğimi söylerken kendimi ne kadar geri çektiğimi…",
            "Bir şeyi istediğimi söylerken aslında onun için hiç alan açmadığımı…",
          ],
        },
        {
          type: "quote",
          text: "Enerji çalışmasının amacı hayatınızı sizin yerinize değiştirmek değil; kendinizde daha önce göremediğiniz bir alanı görünür hâle getirmektir.",
        },
        { type: "h2", text: "Her hissettiğimiz şey enerjetik bir mesaj mıdır?" },
        { type: "p", text: "Hayır. Bu ayrım benim için özellikle önemli." },
        {
          type: "p",
          text: "Göğsümüzde bir sıkışma hissettiğimizde hemen “Kalp çakram kapandı.”, başımız ağrıdığında “Üçüncü gözüm aktive oluyor.” demek zorunda değiliz.",
        },
        {
          type: "p",
          text: "Enerji çalışmalarında bazen yapabileceğimiz en kıymetli şeylerden biri hemen anlam yüklememektir. Önce gözlemlemek, nefesi fark etmek ve bedeni dinlemek; sonra gerekiyorsa enerjetik harita üzerinden sembolik bir okuma yapmak.",
        },
        { type: "quote", text: "Farkındalık ile yorum aynı şey değildir." },
        {
          type: "p",
          text: "Yeni, yoğun veya devam eden fiziksel belirtilerin yalnızca enerji kavramlarıyla açıklanmaması ve gerektiğinde uygun sağlık değerlendirmesinin alınması önemlidir.",
        },
        { type: "h2", text: "Elaris’te enerji çalışmasına nasıl yaklaşıyorum?" },
        {
          type: "p",
          text: "Ben enerji çalışmasını, insanın kendi merkezine dönmesine yardımcı olabilecek bir farkındalık alanı olarak görüyorum. Bazen çakralarla, bazen nefesle, meditasyonla veya sembollerle çalışabiliriz.",
        },
        {
          type: "p",
          text: "Bazen de çalışmanın merkezinde bunların hepsinden önce tek bir soru vardır: “Şu anda hayatımda neyi görmeye ihtiyacım var?”",
        },
        {
          type: "p",
          text: "Yöntemler ve haritalar değişebilir. Kadim geleneklerin kullandığı semboller bile birbirinden farklı olabilir. Fakat bütün bu çalışmaların merkezinde hâlâ aynı insan vardır: Kendi hayatını yaşayan, seçimlerini yapan ve kendi yolunda yürüyen kişi.",
        },
        {
          type: "p",
          text: "Elaris’te enerji çalışmalarına bu nedenle “seni değiştirecek bir yöntem” olarak değil, kendine başka bir yerden bakabileceğin bir alan olarak yaklaşıyorum.",
        },
        {
          type: "contrast",
          from: "Bende neyi düzeltmem gerekiyor?",
          to: "Kendimde henüz neyi görmüyorum?",
        },
        {
          type: "notice",
          heading: "Önemli Bilgilendirme",
          text: "Elaris'te kullanılan enerjetik kavram ve uygulamalar geleneksel/spiritüel çalışma ve kişisel farkındalık çerçevesinde ele alınmaktadır. Tıbbi veya psikolojik tanı ve tedavi yerine geçmez.",
        },
        { type: "signature", name: "ELARIS", motto: "Fark Et • Dengele • Dönüş" },
      ],
    },
  },
];
