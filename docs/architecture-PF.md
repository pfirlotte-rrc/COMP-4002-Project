# Architectural Layout Document - Peter Firlotte

## Hook - src/hooks/useTopics.ts

What does this hook do?

- This hook helps receive and set the topics that will be displayed on the UserPage as well as any errors it will 
receive for the component. It send and receives information from the UserPage to then make use of the topicService.

How did you decide what logic to include in that implementation, and how does that correctly separate solution concerns?

- Because the hook primarily interacts with the component's displayed information, the information it's being sent and
received is part of 'Presentation Logic'.

Where is this implementation made use of in the project and how?

- This hook is used by the UserPage to fetch user tied interested topics, it can also have new ones added through 
the form on the page.

## Service - src/services/topicService.ts

What does this service do?

- This service contacts the repository after validating any operations that are being used to access it through the hook.
In this case, adding a new topic. It ensures that the topic cannot be empty and that the new topics have unique ID's and
passes any potential errors corresponding to any issues.

How did you decide what logic to include in that implementation, and how does that correctly separate solution concerns?

- The Service file handles 'Business Logic', which is the rules we establish arouynd how components operate, such as if
inputs can be empty, or have min/max lengths.

Where is this implementation made use of in the project and how?

- This implementation is made use of through the UserProfile.tsx page's hook. The useTopics hook calls this service for
it to validate any operations it is performing.

## Repo - src\repositories\topicRepo.ts

What does this repository do?

- This Repository first creates a local copy of the mocked test data so that we are not manipulating it directly.
We then filter these to Topics tied to a specific userId as we do not want all of them but a specific set tied to the
current user. Lastly we have a method to add new topics to that same specific user.  

How did you decide what logic to include in that implementation, and how does that correctly separate solution concerns?

- This repository manipulates the test data through potential CRUD operations, and thus fits the 'Data Access Logic' and
thus does not do anything but access or manipulate a copy of the test data. This implemenbtation only currently
filters the data and adds to it.

Where is this implementation made use of in the project and how?

- This repository is called by the topicService. It is the last step needed to access the test data and potentially 
manipulate it depending on the operations called for.
