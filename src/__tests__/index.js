import {orderByProps} from '../index';

test('get ordered properties', () => {
    const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
    const arr = ['name', 'level'];
    const result = orderByProps(obj, arr);
    expect(result).toEqual([
        {key: 'name', value: 'мечник'},
        {key: 'level', value: 2},
        {key: 'attack', value: 80},
        {key: 'defence', value: 40},
        {key: 'health', value: 10},
    ]);
});

test('throw error if property not found', () => {
    const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
    const arr = ['name', 'level', 'power'];
    expect(() => orderByProps(obj, arr)).toThrowError('Property power not found in object');
});