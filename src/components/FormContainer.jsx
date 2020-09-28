import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import crownIcon from "../assets/arena/Add_Crown.png";
import tierIcon from "../assets/arena/tier_icon.png";
import downOne from "../assets/arena/down_one_medium.png";
import staySame from "../assets/arena/stay_same_medium.png";
import upOne from "../assets/arena/up_one_medium.png";
import upTwo from "../assets/arena/up_two_medium.png";
import upThree from "../assets/arena/up_three_medium.png";

const tiers = [
  { value: 21, text: "Tier 21: Great Summoner" },
  { value: 20, text: "Tier 20: First Dragons" },
  { value: 19, text: "Tier 19: Nohrian Noble" },
  { value: 18, text: "Tier 18: Hoshidan Noble" },
  { value: 17, text: "Tier 17: 12 Deadlords" },
  { value: 16, text: "Tier 16: Holy Guard" },
  { value: 15, text: "Tier 15: Four-Riders Rank" },
  { value: 14, text: "Tier 14: Imperial General" },
  { value: 13, text: "Tier 13: Eight Generals" },
  { value: 12, text: "Tier 12: Wyvern General" },
  { value: 11, text: "Tier 11: Great General" },
  { value: 10, text: "Tier 10: Knight General" },
  { value: 9, text: "Tier 9: Mage General" },
  { value: 8, text: "Tier 8: Archer General" },
  { value: 7, text: "Tier 7: Weissritter" },
  { value: 6, text: "Tier 6: Grünritter" },
  { value: 5, text: "Tier 5: Lanceritter" },
  { value: 4, text: "Tier 4: Sable Knight" },
  { value: 3, text: "Tier 3: Dragoon" },
  { value: 2, text: "Tier 2: Whitewing" },
  { value: 1, text: "Tier 1: 7th Platoon Trainee" },
];

const createDropdownOptions = (tiers) => {
  const dropdownOptions = tiers.map((tier) => {
    if (tier.value === 21) {
      return { ...tier, image: { src: crownIcon } };
    }
    return { ...tier, image: { src: tierIcon } };
  });
  return dropdownOptions;
};
const tierOptions = createDropdownOptions(tiers);

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const initialFormState = {
  score: "",
  rank: "",
  startingTier: 0,
  endingTier: 0,
};

export function FormContainer() {
  const [form, setFormState] = useState(initialFormState);
  const [disabledDropdown, setDisabledDropdown] = useState(true);
  const [endingTierOptions, setEndingTierOptions] = useState([]);

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "arena-score", ...form }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
    clearForm();
  };

  const clearForm = () => {
    setFormState({ ...initialFormState });
    setDisabledDropdown(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((previousState) => ({ ...previousState, [name]: value }));
  };

  const handleDropdownChange = (event, data) => {
    const { name, value } = data || event.target;

    if (name === "startingTier") {
      setFormState({...form, [name]: value, endingTier: 0})
      setDisabledDropdown(false);
      setEndingTierOptions(populateEndingTierOptions(value));
    } else if (name === "endingTier") {
      setFormState((previousState) => ({ ...previousState, [name]: value }));
    }
  };

  const _createEndingTierOptions = (startingTier) => {
    let endingTiers = []
    if (startingTier === 18 || startingTier === 19) {
      endingTiers = tiers.filter((tierOption) => {
        let tier = tierOption.value;
        return tier === startingTier + 1 || tier === startingTier - 1;
      });
    } else if (startingTier === 21) {
      endingTiers = tiers.filter((tierOption) => {
        let tier = tierOption.value;
        return tier === startingTier || tier === startingTier - 1;
      });
    } else if (startingTier === 20 || startingTier === 17 || startingTier === 16) {
      endingTiers = tiers.filter((tierOption) => {
        let tier = tierOption.value;
        return (
          tier === startingTier ||
          tier === startingTier + 1 ||
          tier === startingTier - 1
        );
      });
    } else if (startingTier <= 7) {
      endingTiers = tiers.filter((tierOption) => {
        let tier = tierOption.value;
        return (
          tier === startingTier ||
          tier === startingTier + 1 ||
          tier === startingTier + 2 ||
          tier === startingTier + 3
        );
      });
    } else if (startingTier <= 14) {
      endingTiers = tiers.filter((tierOption) => {
        let tier = tierOption.value;
        return (
          tier === startingTier ||
          tier === startingTier + 1 ||
          tier === startingTier - 1 ||
          tier === startingTier + 2 ||
          tier === startingTier + 3
        );
      });
    } else if (startingTier <= 15) {
      endingTiers = tiers.filter((tierOption) => {
        let tier = tierOption.value;
        return (
          tier === startingTier ||
          tier === startingTier + 1 ||
          tier === startingTier - 1 ||
          tier === startingTier + 2
        );
      });
    }
    return endingTiers;
  }

  const _addEndingTierIcons = (startingTier, endingTiers) => {
    return endingTiers.map((tier) => {
      switch (tier.value) {
        case startingTier + 3:
          return { ...tier, image: { src: upThree } };
        case startingTier + 2:
          return { ...tier, image: { src: upTwo } };
        case startingTier + 1:
          return { ...tier, image: { src: upOne } };
        case startingTier:
          return { ...tier, image: { src: staySame } };
        case startingTier - 1:
          return { ...tier, image: { src: downOne } };
        default:
          return null;
      }
    });
  }

  const populateEndingTierOptions = (startingTier) => {
    let endingTiers = _createEndingTierOptions(startingTier);
    let mappedTiers = _addEndingTierIcons(startingTier, endingTiers);
    return mappedTiers;
  };

  useEffect(() => {
    console.log("efftect");
    console.log(form)
  });

  return (
    <>
      <Form
        inverted
        name="arena-score"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal" centered>
          <Form.Input
            required
            fluid
            centered
            placeholder="Rank"
            name="rank"
            onChange={handleChange}
            value={form.rank}
          />
          <Form.Input
            required
            fluid
            centered
            placeholder="Arena Score"
            name="score"
            onChange={handleChange}
            value={form.score}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Select
            required
            fluid
            closeOnEscape
            options={tierOptions}
            placeholder="Starting Tier"
            name="startingTier"
            onChange={handleDropdownChange}
            value={form.startingTier}
          />
          <Form.Select
            required
            disabled={disabledDropdown}
            fluid
            closeOnEscape
            options={endingTierOptions}
            placeholder="Ending Tier"
            name="endingTier"
            onChange={handleDropdownChange}
            value={form.endingTier}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field color="primary" control={Button}>
            Submit
          </Form.Field>
        </Form.Group>
      </Form>
    </>
  );
}
