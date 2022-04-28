import React, { memo, forwardRef } from 'react';
import { TouchableOpacity, View, TextInput } from 'react-native';

import { color } from '../../../common/color';
import { font } from '../../../common/Font';
import Search from '../../../../assets/svg/search';


const SearchHeader = ({ textSearch, settextSearch, onSearchFocus, onSubmitEditing }, ref) => {


    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 74,
                backgroundColor: color.color_white,
                paddingLeft: 20,
                paddingRight: 20,
                marginHorizontal: 15
            }}>
            <Search />

            <TextInput
                ref={ref}
                placeholder="Search Mutual Funds"
                onChangeText={settextSearch}
                onFocus={onSearchFocus}
                onSubmitEditing={onSubmitEditing}
                value={textSearch}
                placeholderTextColor={color.color_placeholder}
                style={{ flex: 1, marginLeft: 10, fontSize: 14 }}
            />



        </TouchableOpacity>
    )
}

export default memo(forwardRef(SearchHeader));

