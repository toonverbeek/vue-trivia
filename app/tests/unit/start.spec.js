import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import { render } from '@testing-library/vue'
import Start from '../../src/views/Start.vue'
import Question from '../../src/views/Question.vue'

test('Difficulty changes are reflected', async () => {
  const { getByLabelText } = render(Start)

  const easyRadioInput = getByLabelText(/easy/i)
  const mediumRadioInput = getByLabelText(/medium/i)

  expect(easyRadioInput).toBeChecked()

  userEvent.click(mediumRadioInput)
  expect(mediumRadioInput).toBeChecked()
})

test('Game starts with the correct difficulty', async () => {
  //todo
})

test('Score equals 1 when question is correctly answered', async () => {
  //todo
})

test('Score equals 0 when question is incorrectly answered or no answer was given', async () => {
  //todo
})

