import React from "react";
import { Button, Form } from "semantic-ui-react";
import tierIcon from "../assets/arena/Add_Crown.png";

const tiers = [
  { value: "21", text: "Tier 21: Great Summoner" },
  { value: "20", text: "Tier 20: First Dragons" },
  { value: "19", text: "Tier 19: Nohrian Noble" },
  { value: "18", text: "Tier 18: Hoshidan Noble" },
  { value: "17", text: "Tier 17: 12 Deadlords" },
  { value: "16", text: "Tier 16: Holy Guard" },
  { value: "15", text: "Tier 15: Four-Riders Rank" },
  { value: "14", text: "Tier 14: Imperial General" },
  { value: "13", text: "Tier 13: Eight Generals" },
  { value: "12", text: "Tier 12: Wyvern General" },
  { value: "11", text: "Tier 11: Great General" },
  { value: "10", text: "Tier 10: Knight General" },
  { value: "9", text: "Tier 9: Mage General" },
  { value: "8", text: "Tier 8: Archer General" },
  { value: "7", text: "Tier 7: Weissritter" },
  { value: "6", text: "Tier 6: Grünritter" },
  { value: "5", text: "Tier 5: Lanceritter" },
  { value: "4", text: "Tier 4: Sable Knight" },
  { value: "3", text: "Tier 3: Dragoon" },
  { value: "2", text: "Tier 2: Whitewing" },
  { value: "1", text: "Tier 1: 7th Platoon Trainee" },
];

const createDropdownOptions = (tiers) => {
  const dropdownOptions = tiers.map((tier) => {
    return { ...tier, image: { src: tierIcon } };
  });
  console.log(dropdownOptions);
  return dropdownOptions;
};
const tierOptions = createDropdownOptions(tiers);

const FormContainer = () => {
  return (
    <>
      <Form className="arena-score" name="arena-score" data-netlify="true">
        <Form.Group widths="equal" centered>
          <Form.Input fluid centered placeholder="Arena Score" />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Select
            search
            fluid
            label="Starting Tier"
            options={tierOptions}
            placeholder="Starting Tier"
          />
          <Form.Select
            disabled
            search
            clearable
            label="Ending Tier"
            fluid
            options={tierOptions}
            placeholder="Ending Tier"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field color="primary" control={Button}>Submit</Form.Field>
        </Form.Group>
      </Form>
    </>
  );
};

export default FormContainer;
