import { useState } from "react";
import Hero from "../../components/Guest/Hero";
import FeatureIcons from "../../components/Guest/FeatureIcons";
import MembershipCheck from "../../components/Guest/MembershipCheck";
import ProductList from "../../components/Guest/ProductList";

export default function Home() {
  const [member, setMember] = useState(null);

  return (
    <>
      <Hero />
      <FeatureIcons />
      <ProductList/>
      <MembershipCheck/>
    </>
  );
}
