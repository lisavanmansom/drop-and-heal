import { redirect } from '@sveltejs/kit';

export const actions = {
  submit: async ({ request }) => {
    const formData = await request.formData();
    const selectedAnswers = {
      question1: formData.get('question1'),
      question2: formData.get('question2'),
      question3: formData.get('question3'),
    };

    // Via selectedAnswers is the result calculated and redirection
    if (selectedAnswers.question1 === 'f1-i-1' && selectedAnswers.question2 === 'f2-i-1') {
      throw redirect(303, '/multiple-task-1'); 
    } else if (selectedAnswers.question1 === 'f1-i-4' && selectedAnswers.question3 === 'f3-i-3') {
      throw redirect(303, '/multiple-task-2'); 
    } else if (selectedAnswers.question2 === 'f2-i-3') {
      throw redirect(303, '/multiple-task-3'); 
    } else {
      throw redirect(303, '/multiple-task-4'); 
    }
  }
};