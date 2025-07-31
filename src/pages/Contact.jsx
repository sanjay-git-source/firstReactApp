import React from "react";
import { Card } from "@/components/ui/card";

//child
const Contact = ({sample,sample1}) => {
  return (
    <div>
      <Card className="p-5 justify-between">
        <h1 className="text-green-500">{sample.title}<br/>{sample1.demo}</h1>
        <h3 className="underline">{sample.couseName}</h3>
        <h6>{sample.desc}</h6>
        <button>{sample.btnText}</button>
      </Card>
    </div>
  );
};

export default Contact;
