import {
  Box,
  Button,
  Flex,
  IconButton,
  Popover,
  Select,
  Separator,
  Text,
  TextField,
} from "@radix-ui/themes";
import {
  Cross2Icon,
  MixerHorizontalIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import React from "react";
import styles from "./filterbutton.module.css";

type Filter = {
  id: number;
  column: string;
  comparison: string;
  value: string;
};

const defaultFilter = {
  column: "name",
  comparison: "=",
  value: "",
};

export const FilterButton = () => {
  const [filters, setFilters] = React.useState<Array<Filter>>([]);

  const applyFilters = (newFilters: Array<Filter>) => {
    setFilters(newFilters);
  };

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="soft" color="gray">
          <MixerHorizontalIcon /> Filter
        </Button>
      </Popover.Trigger>
      <Popover.Content size="1" width="380px">
        <FilterContent applyFilters={applyFilters} initialFilters={filters} />
      </Popover.Content>
    </Popover.Root>
  );
};

interface NewFilterAction {
  type: "new-filter";
}

interface DeleteFilterAction {
  type: "delete-filter";
  id: number;
}

interface ChangeAction {
  type: "change-column" | "change-comparison" | "change-value";
  id: number;
  value: string;
}

type Action = NewFilterAction | DeleteFilterAction | ChangeAction;

const reducer = (filters: Array<Filter>, action: Action): Array<Filter> => {
  switch (action.type) {
    case "new-filter": {
      return [...filters, { ...defaultFilter, id: Math.random() }];
    }
    case "delete-filter": {
      return filters.filter((filter) => filter.id !== action.id);
    }
    case "change-column": {
      return filters.map((filter) =>
        filter.id === action.id ? { ...filter, column: action.value } : filter,
      );
    }
    case "change-comparison": {
      return filters.map((filter) =>
        filter.id === action.id
          ? { ...filter, comparison: action.value }
          : filter,
      );
    }
    case "change-value": {
      return filters.map((filter) =>
        filter.id === action.id ? { ...filter, value: action.value } : filter,
      );
    }
    default: {
      return filters;
    }
  }
};

interface FilterContentProps {
  applyFilters: (newFilters: Array<Filter>) => void;
  initialFilters: Array<Filter>;
}

const FilterContent = ({
  applyFilters,
  initialFilters,
}: FilterContentProps) => {
  const [filters, dispatch] = React.useReducer(reducer, initialFilters);

  const unchanged = JSON.stringify(filters) === JSON.stringify(initialFilters);

  return (
    <>
      {filters.length > 0 ? (
        filters.map((filter, i) => (
          <FilterSelect key={i} filter={filter} dispatch={dispatch} />
        ))
      ) : (
        <Flex pb="3" direction="column" gap="1">
          <Text size="2">No filters applied to this view</Text>
          <Text size="1" color="gray">
            Add a column below to filter the view
          </Text>
        </Flex>
      )}
      <Box mx="-4" pb="3">
        <Separator size="4" />
      </Box>
      <Flex justify="between" align="center" ml="2">
        <Button
          size="1"
          variant="ghost"
          onClick={() => dispatch({ type: "new-filter" })}
        >
          <PlusIcon /> Add filter
        </Button>
        <Button
          size="1"
          onClick={() => applyFilters(filters)}
          disabled={unchanged}
        >
          Apply filter
        </Button>
      </Flex>
    </>
  );
};

interface FilterSelectProps {
  filter: Filter;
  dispatch: React.Dispatch<Action>;
}

const FilterSelect = ({ filter, dispatch }: FilterSelectProps) => {
  return (
    <Flex gap="1" align="center" pb="3">
      <Select.Root
        value={filter.column}
        onValueChange={(value) =>
          dispatch({ type: "change-column", id: filter.id, value })
        }
        size="1"
      >
        <Select.Trigger className={styles.ColumnSelect}>
          <Box mx="1">{filter.column}</Box>
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="name">
            name
            <Text color="gray" size="1" ml="2">
              string
            </Text>
          </Select.Item>
          <Select.Item value="owner">
            owner
            <Text color="gray" size="1" ml="2">
              string
            </Text>
          </Select.Item>
          <Select.Item value="due date">
            due date
            <Text color="gray" size="1" ml="2">
              string
            </Text>
          </Select.Item>
          <Select.Item value="created at">
            created at
            <Text color="gray" size="1" ml="2">
              string
            </Text>
          </Select.Item>
          <Select.Item value="edited at">
            edited at
            <Text color="gray" size="1" ml="2">
              string
            </Text>
          </Select.Item>
        </Select.Content>
      </Select.Root>
      <Select.Root
        value={filter.comparison}
        onValueChange={(value) =>
          dispatch({ type: "change-comparison", id: filter.id, value })
        }
        size="1"
      >
        <Select.Trigger>
          <Box mx="1">{filter.comparison}</Box>
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="=">
            <Text color="gray" mr="2">
              [=]
            </Text>
            equals
          </Select.Item>
          <Select.Item value="<>">
            <Text color="gray" mr="2">
              [{"<>"}]
            </Text>
            not equal
          </Select.Item>
          <Select.Item value=">">
            <Text color="gray" mr="2">
              [{">"}]
            </Text>
            greater than
          </Select.Item>
          <Select.Item value="<">
            <Text color="gray" mr="2">
              [{"<"}]
            </Text>
            less than
          </Select.Item>
          <Select.Item value=">=">
            <Text color="gray" mr="2">
              [{">="}]
            </Text>
            greater or equal than
          </Select.Item>
          <Select.Item value="<=">
            <Text color="gray" mr="2">
              [{"<="}]
            </Text>
            less or equal than
          </Select.Item>
          <Select.Item value="~~">
            <Text color="gray" mr="2">
              [~~]
            </Text>
            like operator
          </Select.Item>
          <Select.Item value="~~*">
            <Text color="gray" mr="2">
              [~~*]
            </Text>
            ilike operator
          </Select.Item>
          <Select.Item value="in">
            <Text color="gray" mr="2">
              [in]
            </Text>
            one of a list of values
          </Select.Item>
          <Select.Item value="is">
            <Text color="gray" mr="2">
              [is]
            </Text>
            checking for (null, not null, true, false)
          </Select.Item>
        </Select.Content>
      </Select.Root>
      <TextField.Root
        className={styles.ValueInput}
        size="1"
        placeholder="Enter a value"
        value={filter.value}
        onChange={(e) =>
          dispatch({
            type: "change-value",
            id: filter.id,
            value: e.target.value,
          })
        }
      />
      <IconButton
        color="gray"
        ml="1"
        size="1"
        variant="ghost"
        onClick={() => dispatch({ type: "delete-filter", id: filter.id })}
      >
        <Cross2Icon />
      </IconButton>
    </Flex>
  );
};
