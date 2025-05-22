import React from "react";
import { useState } from "react";

const ProductForm = () => {
  const [productEnglshName, setproductEnglshName] = useState("");
  const [productHinglishName, setproductHinglishName] = useState("");
  const [productMarathiName, setproductMarathiName] = useState("");

  return (
    <div>
      <form type="sumbit">
        <h1>Add vagitable</h1>
        <input
          type="text"
          placeholder="Product Name English"
          value={productEnglshName}
          onChange={(e) => setproductEnglshName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Name Hinglish"
          value={productHinglishName}
          onChange={(e) => setproductHinglishName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Name marathi"
          value={productMarathiName}
          onChange={(e) => setproductMarathiName(e.target.value)}
        />
        <button>Add Vegitable</button>
      </form>
    </div>
  );
};

export default ProductForm;
