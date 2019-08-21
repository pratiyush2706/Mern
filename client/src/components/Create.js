import React, { useState } from 'react';
import { FormGroup, InputGroup, RadioGroup, Radio, Button } from '@blueprintjs/core';

const Create = () => {
  const [description, setDescription] = useState('');
  const [responsible, setResponsible] = useState('');
  const [priority, setPriority] = useState('');

  const onDescriptionChange = e => setDescription(e.target.value);

  const onResponsibleChange = e => setResponsible(e.target.value);

  const onPriorityChange = e => setPriority(e.target.value);


  const onSubmit = () => console.log(priority);



  return (
    <div>
      <h2 style={{ margin: '4px' }}>Create New:</h2>
      <div style={{ padding: '18px' }}>
        <FormGroup label="Description" labelFor="description">
          <InputGroup id="description" placeholder="Enter description here" value={description} onChange={onDescriptionChange} />
        </FormGroup>
        <FormGroup label="Responsible" labelFor="responsible">
          <InputGroup id="responsible" placeholder="Enter name here" value={responsible} onChange={onResponsibleChange} />
        </FormGroup>
        <FormGroup>
          <RadioGroup label="Priority" inline={true} value={priority} onChange={onPriorityChange} selectedValue={priority} >
            <Radio label="Low" value="low" />
            <Radio label="Medium" value="medium" />
            <Radio label="High" value="high" />
          </RadioGroup>
        </FormGroup>
        <Button text="Submit" intent="primary" onClick={onSubmit} />
      </div>
    </div>
  )
};

export default Create;