export type Service = {
  slug: string;
  name: string;
  description: string;
  purpose: string;
  duration: string;
  price: string;
  method: string;
  cancellationInfo: string;
};

const DEFAULT_METHOD =
  "Çalışma hem online (görüntülü görüşme) hem de yüz yüze olarak uygulanabilir; tercihinizi randevu adımında belirtebilirsiniz.";
// Not: Kesin iptal/değişiklik süresi henüz belirlenmemiştir. Rastgele bir
// süre varsayılmaz; detaylar İptal/Cayma/İade Politikası sayfasında
// [DOLDURULACAK] olarak işaretlenmiştir.
const DEFAULT_CANCELLATION =
  "Randevu iptal ve değişiklik koşulları için İptal, Değişiklik, Cayma ve İade Politikası sayfasını inceleyiniz.";

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
