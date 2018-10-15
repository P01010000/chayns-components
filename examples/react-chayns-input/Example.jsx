import React, { PureComponent } from 'react';

import { Input, DynamicInput } from '../../src/index';
import ExampleContainer from '../ExampleContainer';

export default class Example extends PureComponent {
    onBlur(value) {
        console.log('onBlur', value);
    }

    onChange(value) {
        console.log('onChange', value);
    }

    onEnter(value) {
        console.log('onEnter', value);
    }

    onKeyUp(e) {
        console.log('onKeyUp', e);
    }

    render() {
        return (
            <ExampleContainer headline="Input">
                <Input
                    defaultValue="Input"
                    placeholder="input"
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    onKeyUp={this.onKeyUp}
                    onEnter={this.onEnter}
                    style={{
                        width: '100%',
                        marginBottom: '20px'
                    }}
                />
                <Input
                    placeholder="password"
                    type="password"
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    onKeyUp={this.onKeyUp}
                    onEnter={this.onEnter}
                    style={{
                        width: '100%',
                        marginBottom: '20px'
                    }}
                />
                <Input
                    placeholder="invalid input"
                    invalid
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    onKeyUp={this.onKeyUp}
                    onEnter={this.onEnter}
                    style={{
                        width: '100%',
                        marginBottom: '20px'
                    }}
                />
                <Input
                    placeholder='type "eee"'
                    regExp={new RegExp('.*e{3}.*')}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    onKeyUp={this.onKeyUp}
                    onEnter={this.onEnter}
                    style={{
                        width: '100%',
                        marginBottom: '20px'
                    }}
                />

                <DynamicInput
                    placeholder="Dynamic Input Placeholder"
                    style={{
                        width: '100%',
                        marginBottom: '20px'
                    }}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    onKeyUp={this.onKeyUp}
                    onEnter={this.onEnter}
                />
                <DynamicInput
                    placeholder="Icon"
                    icon="ts-tobit2016"
                    style={{
                        width: '100%',
                        marginBottom: '20px'
                    }}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    onKeyUp={this.onKeyUp}
                    onEnter={this.onEnter}
                    onIconClick={console.log}
                />
                <DynamicInput
                    placeholder='type "eee"'
                    regExp={new RegExp('.*e{3}.*')}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    onKeyUp={this.onKeyUp}
                    onEnter={this.onEnter}
                    icon="ts-tobit2016"
                    style={{
                        width: '100%',
                        marginBottom: '20px'
                    }}
                    onIconClick={console.log}
                />
            </ExampleContainer>
        );
    }
}
