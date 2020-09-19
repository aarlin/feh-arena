import React from "react";
import { Dropdown } from "semantic-ui-react";
import tierIcon from "../assets/arena/Add_Crown.png";

const tiers = [
  { value: "21", text: "Great Summoner" },
  { value: "20", text: "First Dragons " },
  { value: "19", text: "Nohrian Noble " },
  { value: "18", text: "Hoshidan Noble" },
  { value: "17", text: "12 Deadlords" },
  { value: "16", text: "Holy Guard" },
  { value: "15", text: "Four-Riders Rank" },
  { value: "14", text: "Imperial General" },
  { value: "13", text: "Eight Generals" },
  { value: "12", text: "Wyvern General" },
  { value: "11", text: "Great General" },
  { value: "10", text: "Knight General" },
  { value: "9", text: "Mage General" },
  { value: "8", text: "Archer General" },
  { value: "7", text: "Weissritter" },
  { value: "6", text: "Grünritter" },
  { value: "5", text: "Lanceritter" },
  { value: "4", text: "Sable Knight" },
  { value: "3", text: "Dragoon" },
  { value: "2", text: "Whitewing" },
  { value: "1", text: "7th Platoon Trainee" },
];

const createDropdownOptions = (tiers) => {
  const dropdownOptions = tiers.map(tier => {
    return { ...tier, image: { src: tierIcon} }
  });
  console.log(dropdownOptions)
  return dropdownOptions
};
const tierOptions = createDropdownOptions(tiers);

const FormContainer = () => {
  return (
    <>
      <h2 style={{ color: "white", textAlign: "center" }}>Arena</h2>
      <form style={{ color: "white" }}>
        <label>
          Score:
          <input type="text" name="name" />
        </label>
        <br></br>
        <label>
          Tier:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
        <Dropdown
          placeholder="Select Tier"
          fluid
          search
          selection
          options={tierOptions}
        />
      </form>
    </>
  );
};

export default FormContainer;
