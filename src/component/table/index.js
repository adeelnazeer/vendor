/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
import Icon from "../../assets/images/icons/right-arrow.png";
export default () => {
  return (
    <div className="table-main txt-clr fnt-w-600">
      <table>
        <tbody>
          <tr>
            <td className="td-one">May 20 2020</td>
            <td className="td-two">
              Grant Marshall marshall@yahoo.com Bills Place +1(861) 550-2796
            </td>
            <td className="td-three">Pending</td>
            <td className="td-four">$45.00</td>
            <td className="td-five">
              <img src={Icon} alt="" />
            </td>
          </tr>
          <tr>
            <td className="td-one">May 20 2020</td>
            <td className="td-two">
              Grant Marshall marshall@yahoo.com Bills Place +1(861) 550-2796
            </td>
            <td className="td-three">Completed</td>
            <td className="td-four">$45.00</td>
            <td className="td-five">
              <img src={Icon} alt="" />
            </td>
          </tr>
          <tr>
            <td className="td-one">May 20 2020</td>
            <td className="td-two">
              Grant Marshall marshall@yahoo.com Bills Place +1(861) 550-2796
            </td>
            <td className="td-three">Pending</td>
            <td className="td-four">$45.00</td>
            <td className="td-five">
              <img src={Icon} alt="" />
            </td>
          </tr>
          <tr>
            <td className="td-one">May 20 2020</td>
            <td className="td-two">
              Grant Marshall marshall@yahoo.com Bills Place +1(861) 550-2796
            </td>
            <td className="td-three">Pending</td>
            <td className="td-four">$45.00</td>
            <td className="td-five">
              <img src={Icon} alt="" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
