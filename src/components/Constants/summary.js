import { v4 } from "uuid";

const SUMMARY_INFO = [
    {
        id:v4(),
        image:'public/assets/images/icon-reaction.svg',
        title:'Reaction',
        quantity:'80'
    },
    {
        id:v4(),
        image:'public/assets/images/icon-memory.svg',
        title:'Memory',
        quantity:'92'
    },
    {
        id:v4(),
        image:'public/assets/images/icon-verbal.svg',
        title:'Verbal',
        quantity:'61'
    },
    {
        id:v4(),
        image:'public/assets/images/icon-visual.svg',
        title:'Visual',
        quantity:'73'
    }
];

export default SUMMARY_INFO;