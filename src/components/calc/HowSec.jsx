import Image from "next/image";
import Divider from "../general/Divider";
import Table from "./Table";
import MoreCard from "./MoreCard";

export default function HowSec() {
  return (
    <div className="mt-20 px-10 md:px-24">
      {/* //////////// Notes //////////// */}
      <Divider />
      <h2 className="text-[2rem] font-semibold tracking-[-0.1rem] mb-10">
        How does a mortgage calculator help me?
      </h2>
      <p className="my-3 text-textLight">
        When deciding how much house you can afford, one of the most important
        pieces to determine is whether a home will fit into your monthly budget.
        A mortgage calculator helps you understand the monthly cost of a home.
        And ours will allow you to enter different down payments and interest
        rates to help determine what is affordable for you.
      </p>
      <Divider />
      <h2 className="text-[2rem] font-semibold tracking-[-0.1rem] mb-10">
        How much monthly mortgage payment can I afford?
      </h2>
      <p className="my-3 text-textLight">
        Lenders determine how much you can afford on a monthly housing payment
        by calculating your debt-to-income ratio (DTI). The maximum DTI you can
        have in order to qualify for most mortgage loans is often between
        45-50%, with your anticipated housing costs included.
      </p>
      <p className="my-3 text-textLight">
        Your DTI is the balance between your income and your debt. It helps
        lenders understand how safe or risky it is for them to approve your
        loan. A DTI ratio represents how much of your gross monthly income is
        spoken for by creditors, and how much of it is left over to you as
        disposable income. It’s most commonly written as a percentage. For
        example, if you pay half your monthly income in debt payments, you would
        have a DTI of 50%.
      </p>
      {/* //////////// Formula //////////// */}
      <div className="max-w-[780px] mx-auto">
        <p className="py-3">
          Formula for calculating your debt-to-income (DTI) ratio:
        </p>
        <Image
          src="/images/formula1.jpg"
          alt="formula"
          width={780}
          height={153}
        />
        <p className="py-3">
          Here&#39;s an example of what calculating your DTI might look like:
        </p>
        <Image
          src="/images/formula2.jpg"
          alt="formula"
          width={780}
          height={525}
        />
      </div>
      {/* //////////// Notes //////////// */}
      <Divider />
      <h2 className="text-[2rem] font-semibold tracking-[-0.1rem] mb-10">
        How to calculate monthly mortgage payments?
      </h2>
      <p className="my-3 text-textLight">
        Your monthly mortgage payment includes loan principal and interest,
        property taxes, homeowners insurance, and mortgage insurance (PMI), if
        applicable. While not typically included in your mortgage payment,
        homeowners also pay monthly utilities and sometimes pay homeowners
        association (HOA) fees, so it&#39;s a good idea to factor these into
        your monthly budget. This mortgage calculator factors in all these
        typical monthly costs so you can really crunch the numbers.
      </p>
      <h2 className="text-2xl font-semibold tracking-[-0.08rem] my-6">
        Formula for calculating monthly mortgage payments
      </h2>
      <p className="my-3 text-textLight">
        The easiest way to calculate your mortgage payment is to use a
        calculator, but for the curious or mathematically inclined, here&#39;s
        the formula for calculating principal and interest yourself:
      </p>
      {/* //////////// Formula //////////// */}
      <div className="max-w-[780px] mx-auto">
        <Image
          src="/images/formula3.jpg"
          alt="formula"
          width={780}
          height={126}
        />
        <p className="py-3">Where:</p>
        <ul className="list-disc pl-10">
          <li className="py-3">
            <span className="font-semibold">M</span> is monthly payments
          </li>
          <li className="py-3">
            <span className="font-semibold">P</span> is the principal loan
            amount (the amount you borrow)
          </li>
          <li className="py-3">
            <span className="font-semibold">R</span> is the monthly interest
            rate
          </li>
          <li className="py-3">
            <span className="font-semibold">N</span> n is the total number of
            payments in months
          </li>
        </ul>
        <p className="py-3">Here&#39;s a simple example:</p>
        <Image
          src="/images/formula4.jpg"
          alt="formula"
          width={780}
          height={221}
        />
      </div>
      {/* //////////// Notes //////////// */}
      <p className="my-3 text-textLight">
        This formula assumes a fixed-rate mortgage, where the interest rate
        remains constant throughout the loan term. And remember, you&#39;ll
        still need to add on taxes, insurance, utilities, and HOA fees if
        applicable.
      </p>
      <Divider />
      <h2 className="text-2xl font-semibold tracking-[-0.08rem] my-6">
        How to use this mortgage calculator?
      </h2>
      <p className="my-3 text-textLight">
        Play around with different home prices, locations, down payments,
        interest rates, and mortgage lengths to see how they impact your monthly
        mortgage payments.
      </p>
      <p className="my-3 text-textLight">
        Increasing your down payment and decreasing your interest rate and
        mortgage term length will make your monthly payment go down. Taxes,
        insurance, and HOA fees will vary by location. If you enter a down
        payment amount that&#39;s less than 20% of the home price, private
        mortgage insurance (PMI) costs will be added to your monthly mortgage
        payment. As the costs of utilities can vary from county to county,
        we&#39;ve included a utilities estimate that you can break down by
        service. If you&#39;re thinking about buying a condo or into a community
        with a Homeowners Association (HOA), you can add HOA fees.
      </p>
      <p className="my-3 text-textLight">
        The only amounts we haven&#39;t included are the money you&#39;ll need
        to save for annual home maintenance/repairs or the costs of home
        improvements. To see how much home you can afford including these costs,
        take a look at the Better home affordability calculator.
      </p>
      <p className="my-3 text-textLight">
        Fun fact: Property tax rates are extremely localized, so two homes of
        roughly the same size and quality on either side of a municipal border
        could have very different tax rates. Buying in an area with a lower
        property tax rate may make it easier for you to afford a higher-priced
        home.
      </p>
      <h2 className="text-2xl font-semibold tracking-[-0.08rem] my-6">
        Do you know your property tax rate?
      </h2>
      <p className="my-3 text-textLight mb-[4rem]">
        While exact property tax rates vary by county, it can be helpful to look
        at taxes on the state level to get an idea for taxes in your state.
        Here&#39;s a helpful chart from Forbes breaking down the Census
        Bureau&#39;s 2021 American Community Survey 5-year estimate:
      </p>
      <Table />
      <Divider />
      <h2 className="text-[2rem] font-semibold tracking-[-0.1rem] mb-10">
        How is Better&#39;s mortgage calculator different?
      </h2>
      <h2 className="text-2xl font-semibold tracking-[-0.08rem] my-6">
        This mortgage calculator shows your payments with taxes and insurance
      </h2>
      <p className="my-3 text-textLight">
        The property taxes you contribute are used to finance the services
        provided by your local government to the community. These services
        encompass schools, libraries, roads, parks, water treatment, police, and
        fire departments. Even after your mortgage has been fully paid, you will
        still need to pay property taxes. If you neglect your property taxes,
        you run the risk of losing your home to your local tax authority.
      </p>
      <p className="my-3 text-textLight">
        Your lender will usually require you to have homeowners insurance while
        you&#39;re settling your mortgage. This is a common practice among
        lenders because they understand that nobody wants to continue paying a
        mortgage on a home that&#39;s been damaged or destroyed.
      </p>
      <p className="my-3 text-textLight">
        Here&#39;s an interesting fact: Once you fully own your home, the choice
        to maintain homeowners insurance is entirely up to you. However, to
        ensure your home is protected against damages caused by fires, lightning
        strikes, and natural disasters that are common in your area, it is
        highly recommended to keep it. Therefore, always factor in these costs
        when using a Mortgage Calculator.
      </p>
      <h2 className="text-2xl font-semibold tracking-[-0.08rem] my-6">
        This mortgage calculator shows your mortgage costs with PMI
      </h2>
      <p className="my-3 text-textLight">
        PMI, an abbreviation for private mortgage insurance, aids potential
        homeowners in qualifying for a mortgage without the necessity of a 20%
        down payment. By opting for a lower down payment and choosing a mortgage
        with PMI, you can purchase a home sooner, begin accruing equity, and
        keep cash available for future needs. This can all be calculated using
        this Mortgage Calculator.
      </p>
      <p className="my-3 text-textLight">
        Choosing a mortgage with PMI is a popular option: 71% of first-time
        homebuyers had a down payment of less than 20% in July 2021. In 2020,
        the median down payment for first-time homebuyers was just 7%, and it
        hasn&#39;t risen above 10% since 1989.
      </p>
      <p className="my-3 text-textLight">
        PMI is automatically removed from conventional mortgages once your home
        equity reaches 22%. Alternatively, you can request the removal of PMI
        once you&#39;ve accumulated at least 20% home equity.
      </p>
      <h2 className="text-2xl font-semibold tracking-[-0.08rem] my-6">
        This mortgage calculator includes HOA fees
      </h2>
      <p className="my-3 text-textLight">
        Homeowners association (“HOA”) fees are typically charged directly by a
        homeowners association, but as HOA fees come part and parcel with
        condos, townhomes, and planned housing developments, they&#39;re an
        essential factor to consider when calculating your mortgage costs.
      </p>
      <p className="my-3 text-textLight">
        Homes that share structural elements, such as roofs and walls, or
        community amenities like landscaping, pools, or BBQ areas, often require
        homeowners to pay HOA fees for the maintenance of these shared features.
        It&#39;s important to factor in these costs during your budget planning
        stage, especially considering that HOA fees typically increase annually.
        HOAs may also charge additional fees known as &#39;special
        assessments&#39; to cover unexpected expenses from time to time.
      </p>
      <Divider />
      <h2 className="text-[2rem] font-semibold tracking-[-0.1rem] mb-10">
        How to reduce your monthly mortgage payments?
      </h2>
      <p className="my-3 text-textLight">
        The lower the purchase price of the home, the lower your loan amount
        will be. But if the seller is less than willing to cut you a deal, you
        have other options.
      </p>
      <h2 className="text-2xl font-semibold tracking-[-0.08rem] my-6">
        Extend the length of your mortgage
      </h2>
      <p className="my-3 text-textLight">
        The more time you have to pay off the mortgage, the less each monthly
        mortgage payment will be. (In lender-speak, &#39;extending the length of
        your mortgage&#39; is known as &#39;increasing your loan term&#39;.)
        This is why people often choose a 30-year fixed rate mortgage over one
        with a 15- or 20-year term.
      </p>
      <h2 className="text-2xl font-semibold tracking-[-0.08rem] my-6">
        Increase your down payment
      </h2>
      <p className="my-3 text-textLight">
        The smaller the amount of your mortgage, the smaller your monthly
        mortgage payments will be. If you&#39;re able to put at least 20% of the
        home price towards your down payment, you&#39;ll be able to avoid PMI
        (private mortgage insurance). Even if you can&#39;t afford a complete
        20% down payment, boosting your down payment will help you get PMI
        removed sooner. In fact, boosting your down payment by 5% can lower your
        monthly PMI fees.
      </p>
      <h2 className="text-2xl font-semibold tracking-[-0.08rem] my-6">
        Get a lower interest rate
      </h2>
      <p className="my-3 text-textLight">
        Increasing your down payment can be one way to help you qualify for a
        lower interest rate. The amount of your down payment compared to the
        total amount of the loan is called your loan-to-value ratio (LTV).
      </p>
      <p className="my-3 text-textLight">
        Depending on your loan amount, a lower LTV may increase the likelihood
        of you being offered a low interest rate. If you intend on keeping your
        home for a while, you could consider buying points to reduce your
        interest rate. Buying points essentially means you agree to pay more
        upfront costs in exchange for a lower monthly payment.
      </p>
      <p className="my-3 text-textLight">
        If you think you may sell or refinance the home in the first 5-10 years
        of the mortgage, you could consider an adjustable-rate mortgage (ARM).
        An ARM offers a lower fixed interest rate for a set introductory
        period—typically 5, 7, or 10 years. Once the set introductory period
        ends, the interest rate adjusts (interest rate may increase after
        consummation). The introductory interest rate for ARMs is typically
        lower than the interest rate for a conventional fixed-rate mortgage
        which could make it a great way to save on interest if you know you
        won&#39;t keep the mortgage for long.
      </p>
      <p className="my-3 text-textLight">
        If you&#39;re not planning on buying a home for a while, improving your
        credit score is a tried and true way of increasing your chances of
        qualifying for a lower interest rate. By reducing your debt-to-income
        ratio (DTI), lenders will see that you comfortably afford your mortgage
        and may be more willing to offer a lower interest rate.
      </p>
      <Divider />
      <h2 className="text-[2rem] font-semibold tracking-[-0.1rem] mb-10">
        How much home can I afford?
      </h2>
      <p className="my-3 text-textLight">
        Once again, the easiest way to do this is with a calculator! To know if
        a home is in your budget, try out our home affordability calculator.
        This calculator will take a few inputs from you, like income and
        savings, and let you know the maximum amount of home you can afford.
      </p>
      <Divider />
      <h2 className="text-[2rem] font-semibold tracking-[-0.1rem] mb-10">
        Next steps to buying a house
      </h2>
      <p className="my-3 text-textLight">
        There are 8 steps to buying a house and by using this calculator
        you&#39;ve completed step 2 (calculating your home affordability) and
        maybe even step 1 (getting your finances in order).
      </p>
      <p className="my-3 text-textLight">
        The next step is getting pre-approved. A mortgage pre-approval with
        Better Mortgage takes as little as 3-minutes and doesn&#39;t impact your
        credit score. It&#39;s a free, no-commitment way to see how much home
        you can buy, the mortgages you qualify for, and the range of interest
        rates you&#39;ll be offered.
      </p>
      <p className="my-3 text-textLight">
        If you&#39;re ready to buy a home now, our definitive home buying
        checklist can walk you through everything you need to know to get the
        home you want. With your Better Mortgage pre-approval letter in hand,
        you&#39;ll be able to show sellers and real estate agents that you mean
        business—giving you an edge over homebuyers that don&#39;t have this
        kind of proof that they&#39;re financially ready to purchase. And by
        working with an agent from Better Real Estate and funding with Better
        Mortgage, you&#39;ll save $2,000 on closing costs, and save up to $8,200
        on average over the life of your loan.**
      </p>
      <Divider />
      <h2 className="text-[2rem] font-semibold tracking-[-0.1rem] mb-10">
        More resources
      </h2>
      <div className="grid grid-cols-3 gap-12 mb-16">
        <MoreCard
          img="/icons/more1.svg"
          heading="Get pre-approved to see how much you can borrow"
          btn="Get started"
        />
        <MoreCard
          img="/icons/more2.svg"
          heading="See today&#39;s rates in your area"
          btn="See rates"
        />
        <MoreCard
          img="/icons/more3.svg"
          heading="Find out your max homebuying budget"
          btn="Try our mortgage calculator"
        />
      </div>
      <p className="my-3 text-textLight text-xs">
        *See Better Real Estate discount terms and conditions.
        <br />
        **The average lifetime savings estimate is based on a comparison of the
        Freddie Mac Primary Mortgage Market Survey&#39;s (PMMS) 30-year
        fixed-rate mortgage product with Better Mortgage&#39;s own offered rate
        for a comparable mortgage product between Jan &#39;20 - Dec &#39;20.
        PMMS is based on conventional, conforming fully-amortizing home purchase
        loans for borrowers with a loan-to-value of 80 percent and with
        excellent credit. Better Mortgage&#39;s offered rate is based on pricing
        output for a 30-year fixed-rate mortgage product with a 30-day lock
        period for a single-family, owner-occupied residential property and a
        borrower with excellent (760 FICO) credit and a loan-to-value ratio of
        80 percent. Individual savings could vary based on current market rates,
        property type, loan amount, loan-to-value, credit score, debt-to-income
        ratio and other variables.
      </p>
    </div>
  );
}
