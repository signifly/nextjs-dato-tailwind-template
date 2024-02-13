import React from 'react'
import { gql } from 'graphql-request'
import { TestBlockRecord } from '@/types/generated'

// @todo: complete gql query for TestBlock
export const TEST_BLOCK_FRAGMENT = gql`
	fragment TestBlockFragment on TestBlockRecord {
		id
		_modelApiKey
	}
`

// @todo: develop block TestBlock
export const TestBlock = (props: TestBlockRecord) => {
	return <div className={styles.TestBlock}>TestBlock</div>
}