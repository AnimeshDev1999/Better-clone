export default function Table() {
  const row1 = [
    "State",
    " Median Effective Property Tax Rate",
    "Mean Effective Property Tax Rate",
    "Median Home Value",
    "Median Property Taxes Paid",
  ];
  const row2 = ["AL", "0.41%", "0.40%", "$157,100", "$646"];
  const row3 = ["AK", "1.23%", "1.04%", "$282,800", "$3,464"];
  const row4 = ["AZ", "0.62%", "0.63%", "$265,600", "$1,648"];
  const row5 = ["AR", "0.62%", "0.64%", "$142,100", "$878"];
  return (
    <div
      className="relative pointer group w-full h-full overflow-scroll mb-4"
      tabIndex="0"
    >
      <table className="min-w-full border border-successAccent table-auto clip-inset-round">
        <thead className="">
          {/* //////////// Row 1 //////////// */}
          <tr>
            {row1.map((item, index) => (
              <th
                key={index}
                className="border border-strokeInverseBorder text-center bg-mainShade px-2 py-3 lg:px-4"
              >
                <p className="leading-body m-0 p-0 text-sm text-center text-background font-bold">
                  {item}
                </p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* //////////// Row 2 //////////// */}
          <tr className="even:bg-mainTint3">
            {row2.map((item, index) => (
              <td
                key={index}
                className="border border-successAccent text-center px-2 py-3 lg:px-4"
              >
                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                  {item}
                </p>
              </td>
            ))}
          </tr>
          {/* //////////// Row 3 //////////// */}
          <tr className="even:bg-mainTint3">
            {row3.map((item, index) => (
              <td
                key={index}
                className="border border-successAccent text-center px-2 py-3 lg:px-4"
              >
                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                  {item}
                </p>
              </td>
            ))}
          </tr>
          {/* //////////// Row 4 //////////// */}
          <tr className="even:bg-mainTint3">
            {row4.map((item, index) => (
              <td
                key={index}
                className="border border-successAccent text-center px-2 py-3 lg:px-4"
              >
                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                  {item}
                </p>
              </td>
            ))}
          </tr>
          {/* //////////// Row 5 //////////// */}
          <tr className="even:bg-mainTint3">
            {row5.map((item, index) => (
              <td
                key={index}
                className="border border-successAccent text-center px-2 py-3 lg:px-4"
              >
                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                  {item}
                </p>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <div className="hidden lg:group-hover:block absolute w-full h-full bg-black opacity-25 top-0 left-0"></div>
    </div>
  );
}
