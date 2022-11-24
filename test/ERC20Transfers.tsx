import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Heading,
  Box,
  useColorModeValue,
  Avatar,
} from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { getEllipsisTxt } from 'utils/format';
import { IERC20Transfers } from './types';

const ERC20Transfers: FC<IERC20Transfers> = ({ transfers }) => {
  const hoverTrColor = useColorModeValue('gray.100', 'gray.700');

  useEffect(() => console.log('transfers: ', transfers), [transfers]);

  return (
    <>
      <Heading size="lg" marginBottom={6}>
        ERC20 Transfers
      </Heading>
      {transfers?.length ? (
        <Box border="2px" borderColor={hoverTrColor} borderRadius="xl" padding="24px 18px">
          <TableContainer w={'full'}>
            <Table>
              <Thead>
                <Tr>
                  <Th>Icon</Th>
                  <Th>Token</Th>
                  <Th>From</Th>
                  <Th>To</Th>
                  <Th>Date</Th>
                  <Th isNumeric>Value</Th>
                </Tr>
              </Thead>
              <Tbody>
                {transfers?.map((transfer, key) => (
                  <Tr key={key} _hover={{ bgColor: hoverTrColor }} cursor="pointer">
                    <Td>
                      <Avatar size="sm" src={transfer?.logo || ''} name={transfer?.name} />
                      {/* <VStack alignItems={'flex-start'}>
                          <Text as={'span'}>{transfer?.name}</Text>
                          <Text fontSize={'xs'} as={'span'}>
                            {transfer?.symbol}
                          </Text>
                        </VStack> */}
                    </Td>
                    <Td>{getEllipsisTxt(transfer?.address || '')}</Td>
                    <Td>{getEllipsisTxt(transfer?.fromAddress || '')}</Td>
                    <Td>{getEllipsisTxt(transfer?.toAddress || '')}</Td>
                    <Td>{new Date(transfer.blockTimestamp).toLocaleDateString()}</Td>
                    <Td isNumeric>{transfer.value}</Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Icon</Th>
                  <Th>Token</Th>
                  <Th>From</Th>
                  <Th>To</Th>
                  <Th>Date</Th>
                  <Th isNumeric>Value</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <Box>Looks Like you do not have any ERC20 Transfers</Box>
      )}
    </>
  );
};

export default ERC20Transfers;
