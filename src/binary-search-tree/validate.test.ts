import { Node, validate } from './bst'

test('Validate recognizes a valid BST', () => {
  const n = new Node(10)
  n.insert(5)
  n.insert(15)
  n.insert(0)
  n.insert(20)

  expect(validate(n)).toEqual(true)
})

test('Validate recognizes an invalid BST', () => {
  const n = new Node(10)
  n.insert(5)
  n.insert(15)
  n.insert(0)
  n.insert(20)
  n.right?.right && (n.right.right.right = new Node(-20))

  expect(validate(n)).toEqual(false)
})
