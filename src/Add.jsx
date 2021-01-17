import React from 'react';

const Add = () => {
    
    return (
        <div>
            <form>
                <label htmlFor='author'>
                    Author
                    <input id='author' value="" placeholder="Author" />
                </label>
                <button>Add</button>
            </form>
        </div>
    )
}