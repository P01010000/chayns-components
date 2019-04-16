import React from 'react';

const SearchContext = React.createContext({
    search: '',
});

export default SearchContext;

export function connectSearchContext(WrappedComponent) {
    return ({ ...props }) => (
        <SearchContext.Consumer>
            {context => (
                <WrappedComponent
                    {...props}
                    search={context && context.search}
                />
            )}
        </SearchContext.Consumer>
    );
}

