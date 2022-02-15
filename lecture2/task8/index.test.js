import {transformState} from '.';

describe('transformState',()=>{
  test('should return {foo: "bar", name: "Jim"}',
    function(){
      const result =transformState(
        
        {
          foo: 'bar', name: 'Jim', another: 'one',
        },
        [
          {
            operation: 'addProperties', properties: {yet: 'another property'},
          }, 
          {operation: 'clear'},
          {
            operation: 'addProperties', properties: {
              foo: 'bar', name: 'Jim',
            },
          },
        ],
      ); 
        
      expect(result).toStrictEqual({
        foo: 'bar', name: 'Jim',
      });
    });
});

test('should return {name: "Jim"}',
  function(){
    const result =transformState(
      {},
      [
        {
          operation: 'addProperties', properties: { name: 'Jim' },
        },
      ],
    );

    expect(result).toStrictEqual({
      name: 'Jim',
    });
  });

test('should return {}',
  function(){
    const result =transformState(
      {
        foo: 'bar', name: 'Jim', another: 'one',
      },
      [
        {
          operation: 'clear',
        },
      ],
    );

    expect(result).toStrictEqual(
      {},
    );
  });

test('should return { foo: "bar" }',
  function(){
    const result =transformState(
      {
        foo: 'bar', name: 'Jim', another: 'one',
      },
      [
        {operation: 'removeProperties', properties: ['another']},
        { operation: 'clear' },
        { operation: 'clear' },
        { operation: 'clear' },
        {operation: 'addProperties', properties: { yet: 'another property' }},
        { operation: 'clear' },
        {operation: 'addProperties', properties: { foo: 'bar', name: 'Jim' }},
        {operation: 'removeProperties', properties: ['name', 'hello']}

      ],
    );

    expect(result).toStrictEqual(
      {foo:'bar'},
    );
  });