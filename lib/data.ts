export type Service = {
  slug: string;
  name: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "cakra-enerji-alani-dengeleme",
    name: "Çakra & Enerji Alanı Dengeleme",
    description:
      "Enerji merkezlerinizde denge ve akışkanlık hissi oluşturmaya odaklanan bir çalışma.",
  },
  {
    slug: "atasal-karma-atasal-oruntu-calismasi",
    name: "Atasal Karma & Atasal Örüntü Çalışması",
    description:
      "Nesiller arası taşınan örüntülere nazik ve farkındalık temelli bir bakış.",
  },
  {
    slug: "enerjetik-bag-kesme",
    name: "Enerjetik Bağ Kesme",
    description:
      "Artık size hizmet etmeyen enerjetik bağları fark etmeye ve bırakmaya alan açar.",
  },
  {
    slug: "karmik-baglar-iliski-oruntuleri",
    name: "Karmik Bağlar & İlişki Örüntüleri Çalışması",
    description:
      "İlişkilerinizde tekrar eden örüntüleri anlamaya yönelik bir keşif çalışması.",
  },
  {
    slug: "bolluk-bereket-enerji-calismasi",
    name: "Bolluk & Bereket Enerji Çalışması",
    description:
      "Bolluk algınızla ilgili enerjetik engelleri fark etmeye yönelik bir çalışma.",
  },
  {
    slug: "disil-eril-enerji-dengeleme",
    name: "Dişil & Eril Enerji Dengeleme",
    description:
      "İçsel dişil ve eril enerjiler arasında denge kurmayı destekleyen bir seans.",
  },
  {
    slug: "koklenme-guven-alani-calismasi",
    name: "Köklenme & Güven Alanı Çalışması",
    description:
      "Bedeninizde ve hayatınızda daha köklü, güvende hissetmenize alan açan bir çalışma.",
  },
  {
    slug: "ozdeger-kisisel-guc-calismasi",
    name: "Özdeğer & Kişisel Güç Çalışması",
    description:
      "Kendi değerinizle ve kişisel gücünüzle temas kurmayı destekleyen bir seans.",
  },
  {
    slug: "enerji-alani-temizleme-dengeleme",
    name: "Enerji Alanı Temizleme & Dengeleme",
    description:
      "Genel enerji alanınızda berraklık ve denge hissi oluşturmaya yönelik çalışma.",
  },
  {
    slug: "ruhsal-farkindalik-donusum-calismasi",
    name: "Ruhsal Farkındalık & Dönüşüm Çalışması",
    description:
      "İçsel farkındalığınızı derinleştirmeye ve dönüşüm sürecinizi desteklemeye yönelik bir seans.",
  },
  {
    slug: "bireysel-enerji-danismanligi",
    name: "Bireysel Enerji Danışmanlığı",
    description:
      "İhtiyaçlarınıza özel, birebir yürütülen kapsamlı bir enerji danışmanlığı seansı.",
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
