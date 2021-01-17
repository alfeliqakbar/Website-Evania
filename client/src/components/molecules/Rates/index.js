import React from 'react'
import { Gap } from '../../atoms'
import { FormInput } from '../Signin/SigninElements'
import {TrackBtnForm, TrackForm, TrackContainer, TrackWrapper, TrackBtnFormWrap, TrackTitle, TrackBtnWrap, TrackButton, TrackContent} from '../Track/TrackElements'

const Rates = () => {
    return (
        <TrackContainer>
            <TrackWrapper>
                <TrackTitle>|Rates</TrackTitle>
                <Gap height={40} />
                <TrackBtnWrap>
                    <TrackButton to='/track'
                    spy={true} exact='true'
                    >Track</TrackButton>
                    <TrackButton to='/rates'
                    spy={true} exact='true'
                    >Rates</TrackButton>
                </TrackBtnWrap>
                <Gap height={30} />
                <TrackContent>
                    <TrackForm>
                        <FormInput type='location' placeholder='From' />
                        <FormInput type='location' placeholder='To' />
                        <TrackBtnFormWrap>
                            <TrackBtnForm>Search</TrackBtnForm>
                        </TrackBtnFormWrap>
                    </TrackForm>
                </TrackContent>
            </TrackWrapper>
        </TrackContainer>
    )
}

export default Rates
