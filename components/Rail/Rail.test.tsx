import { act, fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Rail from './Rail' // Replace with your actual path

it('renders the Rail component', () => {
  const children = [<div>Item 1</div>, <div>Item 2</div>, <div>Item 3</div>]
  const { container } = render(<Rail rows={1}>{children}</Rail>)
  expect(container).toMatchSnapshot()
})

it('correctly navigates to next and previous slides', async () => {
  const mockChildren = Array.from({ length: 5 }, (_, i) => (
    <div key={i}>Item {i + 1}</div>
  ))

  const { container, getByTestId, getByText } = render(
    <Rail rows={1}>{mockChildren}</Rail>,
  )
  const railContainer = getByTestId('rail-container')

  expect(railContainer).toHaveAttribute('data-current', '0')
  const rightArrow = getByTestId('rails-controls-right')
  const leftArrow = getByTestId('rails-controls-left')

  act(() => fireEvent.click(rightArrow))

  expect(railContainer).toHaveAttribute('data-current', '1')
  act(() => fireEvent.click(leftArrow))

  expect(railContainer).toHaveAttribute('data-current', '0')
})

it('loops over when it reaches the end or when it is less than 0', async () => {
  const mockChildren = Array.from({ length: 2 }, (_, i) => (
    <div key={i}>Item {i + 1}</div>
  ))

  const { container, getByTestId, getByText } = render(
    <Rail rows={1}>{mockChildren}</Rail>,
  )
  const railContainer = getByTestId('rail-container')

  expect(railContainer).toHaveAttribute('data-current', '0')
  const rightArrow = getByTestId('rails-controls-right')
  const leftArrow = getByTestId('rails-controls-left')

  act(() => fireEvent.click(leftArrow))

  expect(railContainer).toHaveAttribute('data-current', '0')
  act(() => fireEvent.click(rightArrow))

  expect(railContainer).toHaveAttribute('data-current', '1')

  act(() => fireEvent.click(rightArrow))

  expect(railContainer).toHaveAttribute('data-current', '0')
})
