import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Items = [
  {
    title: "What is Github and how does it work?",
    content:
      "GitHub is the home for all developers—a platform where you can share code, contribute to open source projects, or even automate your workflow with tools like GitHub Actions and Packages. If you’re just getting started with GitHub, you may know us best as a place for version control and collaboration.",
  },
  {
    title: "How do I see GitHub's availability?",
    content: "Check our real-time status report",
  },
  {
    title: "Why is GitHub so popular?",
    content:
      "GitHub is built by developers for developers, and we’re proud to be home to the world’s largest open source community. With 50 million developers and millions more open source projects, GitHub has become the go-to place to collaborate and build software together.",
  },
];

const AcordionComponent = () => {
  return (
    <>
      <Accordion>
        {Items.map((item, idx) => (
          <Accordion.Item eventKey={String(idx)} key={item.title + idx}>
            <Accordion.Header>{item.title}</Accordion.Header>
            <Accordion.Body style={{ width: "fit", overflowY: "auto" }}>
              {item.content}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default AcordionComponent;
