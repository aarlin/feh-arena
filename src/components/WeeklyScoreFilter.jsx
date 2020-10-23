import React, { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";

export function WeeklyScoreFilter() {
  const [arenaWeek, setArenaWeek] = useState('');
  const [submissionTime, setSubmissionTime] = useState('');

  useEffect(() => {

  });

  return (
    <>
      <Form
        inverted
        name="arena-score"
        data-netlify="true"
        // onSubmit={}
      >
        <Form.Group widths="equal" centered>
          <Form.Input
            required
            fluid
            centered
            placeholder="Arena Week"
            name="arena-week"
            // onChange={handleChange}
            // value={form.week}
          />
          <Form.Input
            required
            fluid
            centered
            placeholder="Submission Time"
            name="score"
            // onChange={handleChange}
            // value={form.score}
          />
        </Form.Group>
      </Form>
    </>
  );
}
