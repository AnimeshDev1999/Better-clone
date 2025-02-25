import FaqBtn from "./FaqBtn";
import FaqCard from "./FaqCard";
import FaqCard2 from "./FaqCard2";

export default function FaqSec() {
  return (
    <div className="py-[5rem] px-[1.5rem] md:p-[5rem]">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-[3.7rem]">
        <h2 className="text-5xl leading-[3.5rem] -tracking-[0.2rem] font-semibold mb-[3rem] md:mb-0">
          Got questions? <br /> We&#39;ve got answers
        </h2>
        <FaqBtn />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FaqCard
          heading="Buying your first home with Better"
          img="/images/faq1.webp"
        />
        <FaqCard2
          inv="false"
          heading="One Day Mortgage"
          img="/images/faq2.webp"
          text="Kick your home loan into hyperdrive. Going from locked rate to
          Commitment Letter takes weeks for traditional lenders. We do it in a
          single day. Traditional lenders deliver a Commitment Letter in a few
          weeks."
        />
        <div className="block md:hidden">
          <FaqCard
            inv="false"
            heading="One Day Mortgage"
            img="/images/faq2.webp"
          />
        </div>
        <FaqCard2
          inv="true"
          heading="Better HELOC"
          img="/images/faq3.webp"
          text="Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit. Access up to 90% of your home equity as cash in as little as 7 days."
        />
        <div className="block md:hidden">
          <FaqCard inv="true" heading="Better HELOC" img="/images/faq3.webp" />
        </div>
        <FaqCard heading="Insurance" img="/images/faq4.webp" />
      </div>
    </div>
  );
}
