import React from 'react'
import { gql } from 'graphql-request'
import { TestBlock2Record } from '@/types/generated'

// @todo: complete gql query for TestBlock2
export const TEST_BLOCK2_FRAGMENT = gql`
	fragment TestBlock2Fragment on TestBlock2Record {
		id
		_modelApiKey
	}
`

// @todo: develop block TestBlock2
export const TestBlock2 = (props: TestBlock2Record) => {
	return <div className={styles.TestBlock2}>TestBlock2</div>
}