import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import Information from "../components/information";

export default function PDDetail() {
  const list_pd = [
    {
      pic: "p1.png",
      name: "Phụ Kiện apple",
      price: 5000,
    },
    {
      pic: "p2.png",
      name: "Phụ Kiện apple",
      price: 35000,
    },
    {
      pic: "p3.png",
      name: "Phụ Kiện apple",
      price: 15000,
    },
    {
      pic: "p4.png",
      name: "Phụ Kiện apple",
      price: 7000,
    },
  ];
  const PDlist = list_pd.map(function (item) {
    return <Card data={item} />;
  });

  return (
    <>
      <Header />
      <Information />
      <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
        {" "}
        {PDlist}
      </div>
      <Footer />
    </>
  );
}
