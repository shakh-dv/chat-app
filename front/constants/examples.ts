import type { PlaygroundMode } from '~/types/playground';

type Example = {
    text: string;
    prompt: string;
}

export const allExamples: Record<PlaygroundMode, Example[]> = {
    image: [
        {
            text: 'Picture of a cat',
            prompt: 'ultrarealistic photo of a cat',
        },
        {
            text: 'New York Uptown',
            prompt: 'ultrarealistic modern photo taken in New-York, Manhattan on a busy afternoon',
        },
    ],
    chat: [
        {
            text: 'Draft an Email',
            prompt: 'Write an email to your boss about the new project',
        },
        {
            text: 'Plan a trip',
            prompt: 'Plan a trip to Paris for 3 days',
        },
    ],
    code: [
        {
            text: 'Debug this code',
            prompt: `Here is a snippet of Python code that is supposed to calculate the factorial of a number, but it's not working correctly. Find and fix the errors in the code.
\`def factorial(n):       if n == 0:           return 1       else:           return n * factorial(n - 1)   print(factorial(5))\`
Explain what was wrong and provide the corrected code.`
        },
        {
            text: 'Implement an algorithm',
            prompt: 'Write a function in Java that implements the Merge Sort algorithm to sort an array of integers. The function should take an array as input and return a sorted array. Provide comments in the code to explain how the algorithm works.'
        }
    ],
    language: [
        {
            text: 'Semantic Similarity Analysis',
            prompt: 'Given a list of phrases like [\'AI research\', \'machine learning\', \'deep learning\', \'neural networks\', \'natural language processing\'], use a vector embeddings model to compute the similarity scores between each pair of phrases. Present the results in a matrix format and identify which phrases are most semantically similar to each other',
        },
        {
            text: 'Generative Embedding',
            prompt: 'Once upon a time',
        }
    ]
};