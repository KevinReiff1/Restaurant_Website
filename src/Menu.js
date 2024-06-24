import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./styles.css";
import React from "react";

function Menu() {
  return (
    <div>
      <div className="menuContainer">
        <div className="menuTitle">
          <h1>Menu</h1>
          <p>
            Call <u>(123) 456-7890</u>
            <br></br>To place your in-store pickup order!
          </p>
          <p>
            <u>
              123 Main Street,
              <br></br>Poughkeepsie, NY
            </u>
          </p>
          <Popup trigger={<button className="Popbutton">Allergy Info</button>}>
            <img
              className="PopImage"
              src="data:image/png;base64,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"
              alt="Contact Staff About Allergy Info"
            />
          </Popup>
        </div>
      </div>
      <div className="menuContainer1">
        <table className="menuItems">
          <th>Beverages</th>
          <tr>
            Coffee.............................................................................................................
            $3.00
          </tr>
          <tr>
            Green
            Tea.......................................................................................................
            $3.00
          </tr>
          <tr>
            Hot
            Chocolate.................................................................................................
            $4.00
          </tr>
          <tr>
            Fountain
            Drink................................................................................................
            $4.00
          </tr>
        </table>
      </div>
      <div className="menuContainer2">
        <table className="menuItems">
          <th>Appetizers</th>
          <tr>
            Soup of the
            Day..............................................................................................
            $6.00
          </tr>
          <tr>
            Garlic
            Knots....................................................................................................
            $8.00
          </tr>
          <tr>
            Antipasto.......................................................................................................
            $13.00
          </tr>
          <tr>
            Salad..............................................................................................................
            $8.00
          </tr>
          <tr>
            Stuffed Mushrooms and
            Walnuts..................................................................
            $10.00
          </tr>
        </table>
      </div>
      <div className="menuContainer3">
        <table className="menuItems">
          <th>Pasta</th>
          <tr>
            Lasagna.........................................................................................................
            $15.00
          </tr>
          <tr>
            Tortellini........................................................................................................
            $16.00
          </tr>
          <tr>
            Ravioli...........................................................................................................
            $16.00
          </tr>
          <tr>
            Penne alla
            Vodka...........................................................................................
            $18.00
          </tr>
          <tr>
            Spaghetti (w/Meatballs,
            +$2.00)...................................................................
            $18.00
          </tr>
          <tr>
            Bolognese......................................................................................................
            $17.00
            <tr>
              Almond Flour
              Pasta......................................................................................
              $17.00
            </tr>
          </tr>
        </table>
      </div>
      <div className="menuContainer4">
        <table className="menuItems">
          <th>Pizza</th>
          <tr>Medium: +$5.00 ---------------------- Large: +$10.00</tr>
          <tr>
            Cheese............................................................................................................
            $12.00
          </tr>
          <tr>
            Pepperoni.......................................................................................................
            $15.00
          </tr>
          <tr>
            Meat
            Lovers...................................................................................................
            $20.00
          </tr>
          <tr>
            Vegetarian......................................................................................................
            $20.00
          </tr>
          <tr>
            Margarita.......................................................................................................
            $20.00
          </tr>
          <tr>
            Build Your
            Own............................................................................................
            $22.00
          </tr>
        </table>
      </div>
      <div className="menuContainer5">
        <table className="menuItems">
          <th>Desserts</th>
          <tr>
            Cannoli............................................................................................................
            $7.00
          </tr>
          <tr>
            Tiramisu...........................................................................................................
            $7.00
          </tr>
          <tr>
            Gelato (Chocolate or
            Vanilla)..........................................................................
            $6.00
          </tr>
          <tr>
            Apple
            Strudel...................................................................................................
            $6.00
          </tr>
          <tr>
            Reese's
            Sundae................................................................................................
            $7.00
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Menu;
