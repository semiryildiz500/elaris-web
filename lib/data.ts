export type Service = {
  slug: string;
  name: string;
  description: string;
  purpose: string;
  duration: string;
  price: string;
  method: string;
  cancellationInfo: string;
  details: {
    what: string[];
    topics: string[];
    process: string[];
    audience: string[];
    after: string[];
  };
};

const DEFAULT_METHOD =
  "Çalışma hem online (görüntülü görüşme) hem de yüz yüze olarak uygulanabilir; tercihinizi randevu adımında belirtebilirsiniz.";
const DEFAULT_CANCELLATION =
  "Randevu saatinden en az 24 saat önce yapılan iptallerde ödenen hizmet bedeli iade edilir; 24 saatten az süre kala yapılan iptallerde ücret iadesi yapılmaz. Randevu değişikliği talepleri WhatsApp üzerinden iletilebilir.";

export const services: Service[] = [
  {
    slug: "cakra-enerji-alani-dengeleme",
    name: "Çakra & Enerji Alanı Dengeleme",
    description:
      "Enerji merkezlerinizde denge ve akışkanlık hissi oluşturmaya odaklanan bir çalışma.",
    purpose:
      "Kişinin bedensel ve duygusal farkındalığına odaklanan, enerji merkezleri ve enerji alanı kavramları çerçevesinde yürütülen spiritüel bir farkındalık çalışmasıdır. Seans, kişinin kendisini gözlemlemesine, içsel dengesine odaklanmasına ve deneyimine alan açmasına eşlik eder.",
    duration: "30 dk",
    price: "1.500 TL",
    method: DEFAULT_METHOD,
    cancellationInfo: DEFAULT_CANCELLATION,
    details: {
      what: [
        "Çakra & Enerji Alanı Dengeleme, kişinin kendisini bedensel, duygusal ve içsel olarak nasıl hissettiğine daha yakından bakmasına alan açan spiritüel bir farkındalık çalışmasıdır.",
        "Çakra ve enerji alanı kavramları bu çalışmada kişinin iç dünyasını gözlemlemesini kolaylaştıran spiritüel bir çerçeve olarak kullanılır.",
      ],
      topics: ["Kişinin o an kendisini daha yoğun, yorgun, dağınık veya sıkışmış hissettiği alanlar üzerinde durulur. Duygusal yükler, günlük yaşamın yarattığı zihinsel yoğunluk ve kişinin kendi iç dengesine ilişkin farkındalığı ele alınabilir."],
      process: ["Seans kısa bir ön görüşmeyle başlar. Kişinin o günkü ihtiyacı ve üzerinde durmak istediği konu dinlenir. Ardından çakra ve enerji alanı odağında farkındalık ve dengeleme çalışması gerçekleştirilir."],
      audience: ["Kendisine dönmek, iç dünyasını gözlemlemek ve yaşamındaki yoğunluk içinde kısa bir alan açmak isteyen kişiler tercih edebilir."],
      after: ["Seans sonrasında kişinin kendi duygu, beden ve düşüncelerini gözlemlemesi önerilir. Her kişinin deneyimi kendine özgüdür; belirli bir sonuç vaat edilmez."],
    },
  },
  {
    slug: "enerji-alani-temizleme-dengeleme",
    name: "Enerji Alanı Temizleme & Dengeleme",
    description:
      "Genel enerji alanınızda berraklık ve denge hissi oluşturmaya yönelik çalışma.",
    purpose:
      "Spiritüel enerji yaklaşımı içerisinde kişinin kendi iç dünyasına, hislerine ve mevcut durumuna odaklandığı bireysel bir farkındalık çalışmasıdır. “Enerji temizleme” ve “dengeleme” ifadeleri spiritüel terminoloji kapsamında kullanılmaktadır; fiziksel temizlik veya tıbbi müdahale anlamına gelmez.",
    duration: "30 dk",
    price: "1.500 TL",
    method: DEFAULT_METHOD,
    cancellationInfo: DEFAULT_CANCELLATION,
    details: {
      what: [
        "Günlük yaşamda karşılaşılan insanlar, ortamlar, sorumluluklar ve duygusal deneyimler bazen kişinin kendisini zihinsel veya duygusal olarak yoğun hissetmesine neden olabilir.",
        "Bu çalışma, “enerji alanı” kavramını spiritüel bir çerçevede ele alarak kişinin kendi iç alanına yeniden dikkat vermesine yönelik bir farkındalık çalışmasıdır.",
      ],
      topics: ["Gün içinde taşındığı hissedilen yoğunluklar, kişinin kendisine ait olanla çevresinden etkilenerek taşıdığını düşündüğü duyguları ayırt etmesi ve kişisel sınırlarının farkına varması üzerinde durulur."],
      process: [
        "Kısa bir görüşmeyle kişinin mevcut durumu dinlenir. Ardından kişinin dikkatini kendi iç alanına yöneltmesine yardımcı olacak spiritüel temizleme ve dengeleme uygulamaları gerçekleştirilir.",
        "Buradaki “temizleme” ifadesi fiziksel veya tıbbi bir işlem anlamına gelmez.",
      ],
      audience: ["Yoğun sosyal veya çalışma temposu sonrasında kendisine dönme ihtiyacı hisseden, çevresel etkilerden kolay etkilendiğini düşünen veya kişisel alanına daha fazla dikkat vermek isteyen kişiler tercih edebilir."],
      after: ["Kişinin bir süre kendi iç dünyasını gözlemlemesi, mümkünse sakin bir zaman ayırması ve deneyimini kendi hisleri üzerinden değerlendirmesi önerilir."],
    },
  },
  {
    slug: "koklenme-guven-alani",
    name: "Köklenme & Güven Alanı",
    description:
      "Bedeninizde ve hayatınızda daha köklü, güvende hissetmenize alan açan bir çalışma.",
    purpose:
      "Kişinin bulunduğu ana, beden farkındalığına ve kendi içsel güven hissine odaklanmasına yönelik spiritüel ve farkındalık temelli bireysel bir çalışmadır. Uygulamada kişinin kendi sınırları ve rahatlığı esas alınır.",
    duration: "30 dk",
    price: "1.500 TL",
    method: DEFAULT_METHOD,
    cancellationInfo: DEFAULT_CANCELLATION,
    details: {
      what: ["Köklenme & Güven Alanı çalışması, dikkati sürekli geçmişe veya geleceğe taşımak yerine kişinin bulunduğu ana, bedenine ve kendi iç alanına yeniden yönelmesine yardımcı olmayı amaçlayan spiritüel bir farkındalık çalışmasıdır."],
      topics: ["Anda kalma, beden farkındalığı, kişisel sınırlar, günlük yaşam içinde kendine alan açabilme ve kişinin kendisini daha güvende hissettiği koşulları fark etmesi üzerinde durulur."],
      process: [
        "Önce kişinin mevcut ihtiyacı konuşulur. Ardından nefes, beden farkındalığı, dikkat ve spiritüel köklenme uygulamalarından uygun olanlar kullanılarak çalışma ilerletilir.",
        "Kişinin sınırları ve rahatlığı seans boyunca önceliklidir.",
      ],
      audience: ["Zihninin sürekli farklı konulara dağıldığını hisseden, günlük yaşamın temposunda kendisine dönmekte zorlanan veya kendi sınırlarını daha fazla fark etmek isteyen kişiler tercih edebilir."],
      after: ["Gün içerisinde kısa sürelerle bedene ve nefese dikkat vermek, çevreyi gözlemlemek ve kişinin kendisini rahat hissettiren günlük rutinlere yer açması çalışmanın farkındalık boyutunu destekleyebilir."],
    },
  },
  {
    slug: "ozdeger-ozsevgi",
    name: "Özdeğer & Özsevgi",
    description:
      "Kendi değerinizle ve özsevginizle temas kurmayı destekleyen bir seans.",
    purpose:
      "Kişinin kendisine ilişkin düşüncelerini, ihtiyaçlarını, kişisel sınırlarını, özdeğer ve özsevgi kavramlarıyla ilişkisini fark etmesine yönelik bireysel bir çalışmadır. Amaç kişinin kendisini daha yakından gözlemlemesine ve kendi içsel kaynaklarını fark etmesine alan açmaktır.",
    duration: "30 dk",
    price: "1.500 TL",
    method: DEFAULT_METHOD,
    cancellationInfo: DEFAULT_CANCELLATION,
    details: {
      what: [
        "Başkalarına gösterdiğimiz anlayışı kendimize göstermek bazen daha zor olabilir.",
        "Özdeğer & Özsevgi çalışması, kişinin kendisiyle kurduğu ilişkiye bakmasına; ihtiyaçlarını, sınırlarını ve kendisine yönelik iç konuşmasını fark etmesine alan açar.",
      ],
      topics: ["Kendini sürekli eleştirme, başkalarının beklentilerine göre hareket etme, “hayır” demekte zorlanma, kendi ihtiyaçlarını geri plana atma ve kişinin değerini dışarıdan gelen onaya bağladığını düşündüğü örüntüler ele alınabilir."],
      process: ["Kişinin kendisiyle ilişkisine dair mevcut deneyimi dinlenir. Seans boyunca özdeğer, özşefkat, kişisel sınırlar ve kişinin kendi iç kaynaklarını fark etmesine yönelik spiritüel farkındalık çalışmaları yapılır."],
      audience: ["Kendisine daha anlayışlı yaklaşmak, ihtiyaçlarını daha fazla fark etmek ve kendi değer algısıyla ilgili düşüncelerini gözlemlemek isteyen kişiler tercih edebilir."],
      after: ["Amaç kişinin bir anda farklı hissetmesi değil; kendisine nasıl davrandığını ve hangi durumlarda kendi ihtiyaçlarından uzaklaştığını daha bilinçli biçimde gözlemleyebilmesine alan açmaktır."],
    },
  },
  {
    slug: "enerjetik-bag-kesme",
    name: "Enerjetik Bağ Kesme",
    description:
      "Artık size hizmet etmeyen enerjetik bağları fark etmeye ve bırakmaya alan açar.",
    purpose:
      "Geçmiş ilişkiler, kişiler veya deneyimlerle bağlantılı olduğu düşünülen duygusal ve spiritüel bağların fark edilmesine ve kişinin kendi sınırlarına yeniden odaklanmasına yönelik bir farkındalık çalışmasıdır. “Enerjetik bağ kesme” ifadesi spiritüel çalışma terminolojisidir.",
    duration: "45 dk",
    price: "2.000 TL",
    method: DEFAULT_METHOD,
    cancellationInfo: DEFAULT_CANCELLATION,
    details: {
      what: [
        "Bazı ilişkiler sona erse bile kişinin zihninde veya duygularında etkisini sürdürebilir. Bazen de devam eden bir ilişkide geçmiş deneyimlerin ağırlığı hissedilebilir.",
        "Enerjetik Bağ Kesme, bu bağları spiritüel ve sembolik bir perspektiften ele alan bir farkındalık çalışmasıdır.",
      ],
      topics: ["Geçmiş ilişkiler, kişinin zihninde sürekli geri dönen kişiler veya deneyimler, kapanmamış hissedilen duygusal süreçler ve kişisel sınırlar üzerinde çalışılabilir."],
      process: ["Öncelikle kişinin üzerinde çalışmak istediği ilişki veya deneyim konuşulur. Ardından bu bağın kişide oluşturduğu düşünceler ve duygular gözlemlenir ve spiritüel bağ bırakma uygulaması gerçekleştirilir."],
      audience: ["Geçmişteki bir ilişkinin veya deneyimin etkisini hâlâ taşıdığını düşünen ve bu konuyla arasındaki ilişkiye farklı bir perspektiften bakmak isteyen kişiler tercih edebilir."],
      after: ["Buradaki “bağ kesme”, bir insanı unutmak veya geçmişi silmek anlamına gelmez. Amaç kişinin söz konusu ilişkiyle kurduğu içsel bağı ve kendi sınırlarını fark etmesine alan açmaktır."],
    },
  },
  {
    slug: "disil-eril-enerji-dengeleme",
    name: "Dişil & Eril Enerji Dengeleme",
    description:
      "İçsel dişil ve eril enerjiler arasında denge kurmayı destekleyen bir seans.",
    purpose:
      "Spiritüel yaklaşımlarda “dişil” ve “eril” olarak ifade edilen sembolik nitelikler üzerinden kişinin kendi davranışlarını, ihtiyaçlarını ve içsel dengesini gözlemlemesine yönelik bir farkındalık çalışmasıdır. Dişil ve eril kavramları biyolojik cinsiyet veya cinsiyet kimliğine ilişkin bir değerlendirme anlamına gelmez.",
    duration: "45 dk",
    price: "2.000 TL",
    method: DEFAULT_METHOD,
    cancellationInfo: DEFAULT_CANCELLATION,
    details: {
      what: [
        "ELARIS yaklaşımında “dişil” ve “eril” kavramları biyolojik cinsiyet anlamında kullanılmaz.",
        "Bunlar; harekete geçme ve kabul etme, yön verme ve akışa izin verme, üretme ve dinlenme gibi farklı içsel nitelikleri ifade eden sembolik kavramlardır.",
      ],
      topics: ["Kişinin sürekli kontrol etme ihtiyacı, dinlenmeye izin verememesi, karar almakta zorlanması, sınır koyma, kabul etme, üretkenlik ve akış arasındaki kişisel dengesi gözlemlenebilir."],
      process: ["Kişinin yaşamında hangi tarafın daha baskın olduğunu düşündüğü konuşulur. Ardından bu iki sembolik niteliğin günlük yaşamdaki yansımalarına yönelik farkındalık çalışması gerçekleştirilir."],
      audience: ["Hayatında sürekli mücadele halinde olduğunu hisseden veya tam tersine harekete geçmekte zorlandığını düşünen; verme-alma, eylem-dinlenme ve kontrol-akış dengesini gözlemlemek isteyen kişiler tercih edebilir."],
      after: ["Amaç iki tarafı matematiksel olarak eşitlemek değil, kişinin farklı durumlarda hangi içsel niteliğe ihtiyaç duyduğunu daha iyi fark etmesine alan açmaktır."],
    },
  },
  {
    slug: "bolluk-bereket-oruntuleri",
    name: "Bolluk & Bereket Örüntüleri",
    description:
      "Bolluk algınızla ilgili enerjetik engelleri fark etmeye yönelik bir çalışma.",
    purpose:
      "Kişinin bolluk, bereket, alma-verme, yeterlilik ve yaşamındaki imkânlara ilişkin düşünce ve inanç örüntülerini fark etmesine yönelik spiritüel bir çalışmadır. Finansal danışmanlık değildir ve maddi kazanç veya belirli bir ekonomik sonuç vaat etmez.",
    duration: "45 dk",
    price: "2.000 TL",
    method: DEFAULT_METHOD,
    cancellationInfo: DEFAULT_CANCELLATION,
    details: {
      what: [
        "Bolluk yalnızca para ile ilgili değildir. Kişinin alma, verme, yeterlilik, fırsatlar ve sahip olduklarıyla kurduğu ilişki de bolluk algısının bir parçası olabilir.",
        "Bu çalışma, kişinin bolluk ve bereket kavramlarıyla ilgili düşünce ve inançlarını spiritüel farkındalık perspektifinden gözlemlemesine alan açar.",
      ],
      topics: ["“Yeterli değil”, “hak etmiyorum”, “kaybederim”, “istemek yanlış” gibi kişinin kendisinde fark ettiği düşünceler; alma-verme dengesi ve fırsatlara yaklaşım biçimi üzerinde durulabilir."],
      process: ["Kişinin bolluk kavramıyla ilişkisi ve tekrar ettiğini düşündüğü örüntüler konuşulur. Ardından bunların yaşamındaki yansımalarına yönelik farkındalık çalışması yapılır."],
      audience: ["Para, fırsatlar, başarı, alma-verme veya yeterlilik kavramlarıyla ilişkisini farklı bir açıdan incelemek isteyen kişiler tercih edebilir."],
      after: ["Bu çalışma finansal danışmanlık veya yatırım danışmanlığı değildir ve gelir, kazanç ya da maddi sonuç vaat etmez. Amaç kişinin konuya ilişkin kendi düşünce ve davranış örüntülerini fark etmesine alan açmaktır."],
    },
  },
  {
    slug: "karmik-baglar-iliski-oruntuleri",
    name: "Karmik Bağlar & İlişki Örüntüleri",
    description:
      "İlişkilerinizde tekrar eden örüntüleri anlamaya yönelik bir keşif çalışması.",
    purpose:
      "Kişinin ilişkilerinde tekrar ettiğini düşündüğü davranışları, duyguları ve ilişki biçimlerini spiritüel farkındalık perspektifinden gözlemlemesine yönelik bireysel bir çalışmadır. İlişkiler hakkında kehanette bulunmaz veya geleceğe ilişkin kesin sonuçlar vaat etmez.",
    duration: "60 dk",
    price: "2.750 TL",
    method: DEFAULT_METHOD,
    cancellationInfo: DEFAULT_CANCELLATION,
    details: {
      what: [
        "Bazen hayatımızdaki kişiler değişmesine rağmen ilişkilerimizde benzer durumların tekrarlandığını hissedebiliriz.",
        "Karmik Bağlar & İlişki Örüntüleri çalışması, kişinin bu tekrarları spiritüel bir farkındalık perspektifinden incelemesine alan açar.",
      ],
      topics: ["Tekrarlayan ilişki dinamikleri, benzer partner seçimleri, sınır koyma biçimleri, verme-alma dengesi ve kişinin ilişkiler içerisinde üstlendiğini düşündüğü roller ele alınabilir."],
      process: ["Kişinin dikkatini çeken tekrar eden ilişki örüntüleri konuşulur. Bunların geçmiş ve mevcut ilişkilerde nasıl ortaya çıktığı gözlemlenir ve kişinin kendi seçimleri, sınırları ve ihtiyaçları üzerine farkındalık çalışması yapılır."],
      audience: ["“İlişkilerimde neden benzer şeyleri tekrar yaşıyorum?” sorusunu kendisine soran ve ilişki deneyimlerini farklı bir açıdan incelemek isteyen kişiler tercih edebilir."],
      after: ["“Karmik” kavramı burada spiritüel bir çalışma çerçevesidir. Seans geçmiş yaşamlar hakkında doğrulanmış bilgiler sunduğunu iddia etmez; fal veya gelecek tahmini değildir."],
    },
  },
  {
    slug: "atasal-karma-atasal-oruntuler",
    name: "Atasal Karma & Atasal Örüntüler",
    description:
      "Nesiller arası taşınan örüntülere nazik ve farkındalık temelli bir bakış.",
    purpose:
      "Aileden ve geçmiş kuşaklardan aktarıldığı düşünülen davranış, ilişki ve yaşam örüntülerinin kişinin kendi deneyimi üzerinden fark edilmesine yönelik spiritüel bir çalışmadır. Geçmiş veya aile bireyleri hakkında doğrulanmış gerçekler ortaya koyduğu iddiası taşımaz.",
    duration: "60 dk",
    price: "2.750 TL",
    method: DEFAULT_METHOD,
    cancellationInfo: DEFAULT_CANCELLATION,
    details: {
      what: [
        "Aile içinde kuşaktan kuşağa aktarıldığını düşündüğümüz bazı davranış biçimleri, inanışlar ve ilişki modelleri olabilir.",
        "Atasal Karma & Atasal Örüntüler çalışması, kişinin ailesiyle ve geçmişten geldiğini düşündüğü örüntülerle kurduğu ilişkiye spiritüel bir perspektiften bakmasına alan açar.",
      ],
      topics: ["Aile içerisinde tekrar ettiğini düşündüğünüz ilişki biçimleri, roller, beklentiler, para ve başarıya ilişkin yaklaşımlar, fedakârlık anlayışı veya kişinin kendisinde gözlemlediği benzer davranış örüntüleri ele alınabilir."],
      process: ["Kişinin kendi deneyimi ve bildiği aile hikâyesi üzerinden tekrar ettiğini düşündüğü konular belirlenir. Ardından kişinin bu örüntülerle bugün nasıl bir ilişki kurduğu üzerinde farkındalık çalışması yapılır."],
      audience: ["“Bu davranış bana mı ait, yoksa ailemden öğrendiğim bir kalıp mı?” sorusunu araştırmak ve aileden öğrendiğini düşündüğü bazı kalıpları gözlemlemek isteyen kişiler tercih edebilir."],
      after: ["Bu çalışma aile geçmişi veya atalar hakkında bilinmeyen gerçekleri ortaya çıkardığını iddia etmez. Çalışmanın merkezinde kişinin kendi deneyimi, algısı ve farkındalığı bulunur."],
    },
  },
  {
    slug: "ruhsal-farkindalik-donusum",
    name: "Ruhsal Farkındalık & Dönüşüm",
    description:
      "İçsel farkındalığınızı derinleştirmeye ve dönüşüm sürecinizi desteklemeye yönelik bir seans.",
    purpose:
      "Kişinin yaşamındaki deneyimleri, düşünceleri, duyguları ve kendisiyle ilişkisini spiritüel bir perspektiften gözlemlemesine alan açan bireysel bir çalışmadır. Belirli bir inanç sistemini benimsetmeyi amaçlamaz ve belirli bir dönüşüm sonucu garanti etmez.",
    duration: "60 dk",
    price: "2.750 TL",
    method: DEFAULT_METHOD,
    cancellationInfo: DEFAULT_CANCELLATION,
    details: {
      what: [
        "Bazen insan yaşamında bir şeylerin değişmesi gerektiğini hisseder ancak değişimin nereden başlayacağını net olarak göremeyebilir.",
        "Ruhsal Farkındalık & Dönüşüm çalışması, kişinin yaşamına biraz daha geniş bir perspektiften bakabilmesi için oluşturulmuş bireysel bir farkındalık alanıdır.",
      ],
      topics: ["Kişinin yaşamındaki tekrarlar, değerleri, seçimleri, ilişkileri, kendisiyle kurduğu bağ ve mevcut yaşam döneminde önem kazanan sorular üzerinde durulabilir."],
      process: ["Seans kişinin bugün nerede olduğunu ve hangi konunun kendisi için ön planda bulunduğunu anlatmasıyla başlar. Konuşma ve spiritüel farkındalık uygulamaları aracılığıyla konu farklı açılardan ele alınır."],
      audience: ["Hayatında bir geçiş döneminde olan, kendisini yeniden değerlendirmek isteyen veya “Ben şu anda hayatımın neresindeyim?” sorusuna daha fazla alan açmak isteyen kişiler tercih edebilir."],
      after: [
        "Amaç kişiye ne yapması gerektiğini söylemek değildir. Kişinin kendi cevaplarını, değerlerini ve seçimlerini daha açık biçimde görebilmesine alan açmaktır.",
        "Belirli bir dönüşüm veya sonuç garanti edilmez.",
      ],
    },
  },
  {
    slug: "bireysel-elaris-danismanligi",
    name: "Bireysel Elaris Danışmanlığı",
    description:
      "İhtiyaçlarınıza özel, birebir yürütülen kapsamlı bir danışmanlık görüşmesi.",
    purpose:
      "Kişinin üzerinde çalışmak istediği konuların ve ihtiyaçlarının dinlendiği, uygun ELARIS farkındalık çalışmalarının birlikte değerlendirildiği bireysel görüşmedir. Görüşme kapsamında tıbbi veya psikiyatrik teşhis konulmaz ve tedavi düzenlenmez.",
    duration: "60 dk",
    price: "2.750 TL",
    method: DEFAULT_METHOD,
    cancellationInfo: DEFAULT_CANCELLATION,
    details: {
      what: [
        "Hangi ELARIS çalışmasının size uygun olduğundan emin değilseniz veya ele almak istediğiniz konu tek bir başlık altında toplanmıyorsa, Bireysel ELARIS Danışmanlığı başlangıç noktası olarak kullanılabilir.",
        "Burada çalışma hazır bir kalıptan değil, kişinin o gün getirdiği konu ve ihtiyaçtan başlar.",
      ],
      topics: ["İlişkiler, kişisel sınırlar, özdeğer, yaşamda tekrar eden örüntüler, karar dönemleri, kişinin kendisiyle ilişkisi veya o anda hayatında ön plana çıkan başka bir konu ele alınabilir."],
      process: [
        "Seansın ilk bölümünde kişinin ihtiyacı ve beklentisi dinlenir.",
        "Ardından ELARIS kapsamındaki farkındalık ve spiritüel çalışma yaklaşımlarından konuya uygun olanlar kullanılarak kişiye özel bir çalışma alanı oluşturulur.",
      ],
      audience: ["Hangi çalışmayı seçmesi gerektiğinden emin olmayan veya birden fazla konuyu birlikte değerlendirmek isteyen kişiler için uygundur."],
      after: [
        "Görüşmenin sonunda ele alınan konular kısaca değerlendirilir. Gerekiyorsa kişinin kendi başına gözlemleyebileceği alanlar konuşulur.",
        "Bu görüşme tıbbi veya psikiyatrik değerlendirme, teşhis ya da psikoterapi yerine geçmez.",
      ],
    },
  },
];

export type Workshop = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

export const workshops: Workshop[] = [
  {
    slug: "workshop-1",
    title: "Yaklaşan Workshop",
    date: "Tarih yakında duyurulacak",
    description:
      "Bu alan, yaklaşan workshop ve buluşmalarımızın detaylarıyla güncellenecek.",
  },
  {
    slug: "workshop-2",
    title: "Yaklaşan Buluşma",
    date: "Tarih yakında duyurulacak",
    description:
      "Grup enerjisiyle derinleşen, deneyim temelli bir buluşma alanı.",
  },
  {
    slug: "workshop-3",
    title: "Yaklaşan Workshop",
    date: "Tarih yakında duyurulacak",
    description:
      "Detaylar ve görseller çok yakında bu alanda yerini alacak.",
  },
];
