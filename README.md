# Student List task, Sphinx Tech Test

## React, Next.js, Redux, Material UI, React-Hooks-From

I've replicated a typical workflow to offer insight into what my development cycle would look like. My approach to this project was to think of it as development of a small aspect in a greater ecosystem, that is to say, I chose the tech I think would best suit some of the banchmarks the Sphunx AI team would be looking for.

- Product Backlog: Because of the scope of this project, I've chosen to use Github Issues as my project backlog. For enterprise projects, I'd describe a more atomic, extensive backlog on a platform like Jira, CLickup, or Backlog
- Wireframes, Templates, Mockups: My typical development proccess starts with mockups in Figma or other to guide the development proccess. Because I knew the MUI Data Grid/Forms were going to describe the entirety of the project, I prioritized starting development.
- Frontend Component Library: Although this project (and much of the insdustry after the deprecation of npx create-react-app) is built with Next.js, which ships with Tailwind.css, I chose to use MUI for the themeing. While I wont claim that MUI is empirically better, I chose it because it prioritizes design consistency and speed of development, and offers a great selection of predefined components, at least 2 of which I planned to use at since the start of the project. Although there are some obstacles to overcome with the overhead of injecting it to a platform like Next (supports SSR), it's well worth it for projects like this.
- Redux: While a polarizing state management system, I chose to implement Redux again for the longterm benefits for the hypothetical rest of the ecosystem that this tech test describes on feature of. Centralized state management requires more boilerplate, but also exposes many opportunities for optimization, safugarding, and graceful degredation. I used Redux-Toolkit to minimalize the boilerplate, but still allow the best distribution of data as it will be needed. Again, extra care must be taken to work with SSR and Next, but the Next team have provided an integration.
- Typescript: There is no reason I know for an enterprise project NOT to be developed in Typescript, it offers one more tool for developers to deliver a robust, safe, descriptive product.

#### BREIF:
This will show a simple UI with components, lists, and routing. 
JSON data storage for dummy data.

The student entity should comprise of the following fields (Id, forename, surname,
Form, and a SEND Boolean of Yes or No)

- Routing
- Filtering
- Dynamic forms
