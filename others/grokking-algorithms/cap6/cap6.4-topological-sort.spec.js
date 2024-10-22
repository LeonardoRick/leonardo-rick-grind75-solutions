import { createValidList } from './cap6.4-topological-sort.js';
import assert from 'assert';

const graph = {
    "Exercise": ["Shower"],
    "Shower": ["Get Dressed"],
    "Eat Breakfast": [],
    "Wake Up": ["Exercise", "Brush Teeth", "Pack Lunch"],
    "Pack Lunch": [],
    "Brush Teeth": ["Eat Breakfast"],
    "Get Dressed": [],
};

const expectedList = [
    'Wake Up',
    'Pack Lunch',
    'Brush Teeth',
    'Eat Breakfast',
    'Exercise',
    'Shower',
    'Get Dressed'
];
const result = createValidList(graph);

try {
    assert.deepStrictEqual(result, expectedList);
    console.log('Test passed!');
} catch (error) {
    console.error('Test failed:', error);
}
