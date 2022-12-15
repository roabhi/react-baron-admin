const Insurance = ({
  company_id,
  category,
  company_category,
  domain,
  estetic,
  capital_range,
  cost,
  score,
}) => {
  return (
    <tr data-company-id={company_id} className="border-b">
      <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
        {category[0].toUpperCase() + category.substr(1)}
      </td>
      <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
        {company_category[0].toUpperCase() + company_category.substr(1)}
      </td>
      <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
        {domain === 'pub' && <>P&uacute;blico</>}
        {domain === 'pri' && <>Privado</>}
        {domain === 'mix' && <>Mixto</>}
      </td>
      <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
        {estetic}
      </td>
      <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
        {Math.trunc(capital_range)}
      </td>
      <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
        {cost}
      </td>
      <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-3 py-4 w-1/12">
        {Math.trunc(score)}
      </td>
    </tr>
  )
}

export default Insurance
