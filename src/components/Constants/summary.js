import { v4 } from "uuid";

const SUMMARY_INFO = [
    {
        id:v4(),
        image:'public/assets/images/icon-reaction.svg',
        title:'Reaction',
        quantity:'80',
        color:'255,85,85'
    },
    {
        id:v4(),
        image:'public/assets/images/icon-memory.svg',
        title:'Memory',
        quantity:'92',
        color:'255,178,30'
    },
    {
        id:v4(),
        image:'public/assets/images/icon-verbal.svg',
        title:'Verbal',
        quantity:'61',
        color:'0,187,143'
    },
    {
        id:v4(),
        image:'public/assets/images/icon-visual.svg',
        title:'Visual',
        quantity:'73',
        color:'17,37,214'
    }
];

export default SUMMARY_INFO;