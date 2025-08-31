import type { Meta, StoryObj } from '@storybook/react';
import DataTable from '../components/DataTable';

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  argTypes: {
    data: { control: 'object' },
    columns: { control: 'object' },
    loading: { control: 'boolean' },
    selectable: { control: 'boolean' },
    onRowSelect: { action: 'rowSelected' },
  },
};

export default meta;

type Story = StoryObj<typeof DataTable<User>>;

const sampleData: User[] = [
  { id: 1, name: 'Alice', age: 30, email: 'alice@example.com' },
  { id: 2, name: 'Bob', age: 24, email: 'bob@example.com' },
  { id: 3, name: 'Charlie', age: 35, email: 'charlie@example.com' },
  { id: 4, name: 'David', age: 28, email: 'david@example.com' },
];

const sampleColumns = [
  { key: 'id', title: 'ID', dataIndex: 'id', sortable: true },
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email' },
];

export const Default: Story = {
  args: {
    data: sampleData,
    columns: sampleColumns,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns: sampleColumns,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns: sampleColumns,
    loading: false,
  },
};

export const Selectable: Story = {
  args: {
    data: sampleData,
    columns: sampleColumns,
    selectable: true,
  },
};

export const Sortable: Story = {
  args: {
    data: sampleData,
    columns: sampleColumns,
  },
};
