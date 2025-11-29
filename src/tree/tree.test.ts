import { test, expect, describe } from 'bun:test'
import { Node, Tree } from './tree'

describe('Node', () => {
  test('Node has a data and children properties', () => {
    const n = new Node('a')
    expect(n.data).toEqual('a')
    expect(n.children.length).toEqual(0)
  })

  test('Node can add children', () => {
    const n = new Node('a')
    n.add('b')
    expect(n.children.length).toEqual(1)
    expect(n.children[0].children).toEqual([])
  })

  test('Node can remove children', () => {
    const n = new Node('a')
    n.add('b')
    expect(n.children.length).toEqual(1)
    n.remove('b')
    expect(n.children.length).toEqual(0)
  })
})

describe('Tree', () => {
  test('starts empty', () => {
    const t = new Tree()
    expect(t.root).toEqual(null)
  })

  test('Can traverse bf', () => {
    const letters: string[] = []
    const t = new Tree<string>()
    t.root = new Node('a')
    t.root.add('b')
    t.root.add('c')
    t.root.children[0].add('d')

    t.traverseBF((node) => {
      letters.push(node.data)
    })

    expect(letters).toEqual(['a', 'b', 'c', 'd'])
  })

  test('Can traverse DF', () => {
    const letters: string[] = []
    const t = new Tree<string>()
    t.root = new Node('a')
    t.root.add('b')
    t.root.add('c')
    t.root.children[0].add('d')

    t.traverseDF((node) => {
      letters.push(node.data)
    })

    expect(letters).toEqual(['a', 'b', 'd', 'c'])
  })
})
