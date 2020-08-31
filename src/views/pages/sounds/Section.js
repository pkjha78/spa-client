import React, {useState} from 'react';
import ListSection from './ListSection';
import EditSectionForm from './EditSection';
import AddSectionForm from './AddSection';

const Section = () => {
  const initialSection = { id: null, name: "" };
  const [currentSection, setCurrentSection] = useState(initialSection);

  const [sections, setSections] = useState(null);
  const [editing, setEditing] = useState(false);
  const [addition, setAddition] =useState(false);
  const [listing, setListing] =useState(true);

  const onAddition = () => {
    setAddition(true);
    setEditing(false);
    setListing(false)
  }
  const addSection = (section) => {
    section.id = sections.length + 1;
    setSections([...sections, section]);
  };

  const editSection = (id, section) => {
    setEditing(true);
    setListing(false);
    setAddition(false);

    setCurrentSection(section);
  };

  const updateSection = (newSection) => {
    setSections(
      sections.map((section) => (section.id === currentSection.id ? newSection : section))
    );
    setCurrentSection(initialSection);
    setEditing(false);
  };

  const deleteSection = (id) => {
    setSections(sections.filter((section) => sections.id !== id));
  };

  return(
    <>
      {editing && (
          <div>
            <EditSectionForm
              currentSection={currentSection}
              onAddition={onAddition}
              updateSection={updateSection}
            />
          </div>
      )}

      {addition && (
        <div>
          <AddSectionForm addSection={addSection} />
        </div>
      )}

      {listing  && (
        <ListSection
          deleteSection={deleteSection}
          editSection = {editSection}
          onAddition={onAddition}
        />
      )}


    </>
  )
}
export default Section;
