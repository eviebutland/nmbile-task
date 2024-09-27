import { describe, it, expect } from 'vitest'
import { handleUserRole } from '.'

describe('handleUserRole', () => {
    it('Returns early from function when role does not exist', () => {
        expect(() => handleUserRole('admewrin')).toThrowError('Error: not a user role')
    })
   
    it.each([
        'admin', 'editor', 'guest', 'moderator','support'
    ])('User role matches return', (a: unknown) => {
        expect(handleUserRole(a)).toBe(`is ${a}`)
    }) 
    it('Returns premium when role is member', () => {
        expect(handleUserRole('member')).toBe('is premium member')
    })
    it('Returns national viewer when role is viewer', () => {
        expect(handleUserRole('viewer')).toBe('is national viewer')
    })
})