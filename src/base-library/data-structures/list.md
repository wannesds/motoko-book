> **BETA WARNING** _This chapter is being reviewed and updated_

# List

The difference between a list and an [array](/base-library/data-structures/array.html) is that an array is stored as one _contiguous block of bytes_ in memory and a list is 'scattered' around without the elements having to be adjacent to each other. The advantage is that we can use memory more efficiently by filling the memory more flexibly. The downside is that for operations on the whole list, we have to visit each element one by one which may be computationally expensive.

For more on the List data structures visit [recursive types](/advanced-types/recursive-types.html).

The _convention_ is to name the [_module alias_](/common-programming-concepts/modules.html#imports) after the [_file name_](/common-programming-concepts/modules.html#imports) it is defined in:

```motoko
{{#include _mo/list.mo:a}}
```

### On this page

[Function `nil`](#listnil)  
[Function `isNil`](#listisnil)  
[Function `push`](#listpush)  
[Function `last`](#listlast)  
[Function `pop`](#listpop)  
[Function `size`](#listsize)  
[Function `get`](#listget)  
[Function `reverse`](#listreverse)  
[Function `iterate`](#listiterate)  
[Function `map`](#listmap)  
[Function `filter`](#listfilter)  
[Function `partition`](#listpartition)  
[Function `mapFilter`](#listmapfilter)  
[Function `mapResult`](#listmapresult)  
[Function `append`](#listappend)  
[Function `flatten`](#listflatten)  
[Function `take`](#listtake)  
[Function `drop`](#listdrop)  
[Function `foldLeft`](#listfoldleft)  
[Function `foldRight`](#listfoldright)  
[Function `find`](#listfind)  
[Function `some`](#listsome)  
[Function `all`](#listall)  
[Function `merge`](#listmerge)  
[Function `compare`](#listcompare)  
[Function `equal`](#listequal)  
[Function `tabulate`](#listtabulate)  
[Function `make`](#listmake)  
[Function `replicate`](#listreplicate)  
[Function `zip`](#listzip)  
[Function `zipWith`](#listzipwith)  
[Function `split`](#listsplit)  
[Function `chunks`](#listchunks)  
[Function `fromArray`](#listfromarray)  
[Function `fromVarArray`](#listfromvararray)  
[Function `toArray`](#listtoarray)  
[Function `toVarArray`](#listtovararray)  
[Function `toIter`](#listtoiter)

## List.nil

```motoko
func nil<T>() : List<T>
```

| **parameters**     |           |
| ------------------ | --------- |
| Generic parameters | `T`       |
| Return type        | `List<T>` |

### Example

```motoko, run
{{#include _mo/list/nil.mo:a}}
```

## List.isNil

```motoko
func isNil<T>(l : List<T>) : Bool
```

| **parameters**     |               |
| ------------------ | ------------- |
| Generic parameters | `T`           |
| Variable argument  | `l : List<T>` |
| Return type        | `Bool`        |

### Example

```motoko, run
{{#include _mo/list/isNil.mo:a}}
```

## List.push

```motoko
func push<T>(

  x : T
  l : List<T>

) : List<T>
```

| **parameters**     |               |
| ------------------ | ------------- |
| Generic parameters | `T`           |
| Variable argument1 | `x : T`       |
| Variable argument2 | `l : List<T>` |
| Return type        | `List<T>`     |

### Example

```motoko, run
{{#include _mo/list/push.mo:a}}
```

## List.last

```motoko
func last<T>(l : List<T>) : ?T
```

| **parameters**     |               |
| ------------------ | ------------- |
| Generic parameters | `T`           |
| Variable argument  | `l : List<T>` |
| Return type        | `?T`          |

### Example

```motoko, run
{{#include _mo/list/last.mo:a}}
```

## List.pop

```motoko
func pop<T>(l : List<T>) : (?T, List<T>)
```

| **parameters**     |                 |
| ------------------ | --------------- |
| Generic parameters | `T`             |
| Variable argument  | `l : List<T>`   |
| Return type        | `(?T, List<T>)` |

### Example

```motoko, run
{{#include _mo/list/pop.mo:a}}
```

## List.size

```motoko
func size<T>(l : List<T>) : Nat
```

| **parameters**     |               |
| ------------------ | ------------- |
| Generic parameters | `T`           |
| Variable argument  | `l : List<T>` |
| Return type        | `Nat`         |

### Example

```motoko, run
{{#include _mo/list/size.mo:a}}
```

## List.get

```motoko
func get<T>(

  l : List<T>
  n : Nat

) : ?T
```

| **parameters**     |               |
| ------------------ | ------------- |
| Generic parameters | `T`           |
| Variable argument1 | `l : List<T>` |
| Variable argument2 | `n : Nat`     |
| Return type        | `?T`          |

### Example

```motoko, run
{{#include _mo/list/get.mo:a}}
```

## List.reverse

```motoko
func reverse<T>(l : List<T>) : List<T>
```

| **parameters**     |               |
| ------------------ | ------------- |
| Generic parameters | `T`           |
| Variable argument  | `l : List<T>` |
| Return type        | `List<T>`     |

### Example

```motoko, run
{{#include _mo/list/reverse.mo:a}}
```

## List.iterate

```motoko
func iterate<T>(

  l : List<T>
  f : T -> ()

) : ()
```

| **parameters**     |               |
| ------------------ | ------------- |
| Generic parameters | `T`           |
| Variable argument  | `l : List<T>` |
| Function argument  | `f : T -> ()` |
| Return type        | `()`          |

### Example

```motoko, run
{{#include _mo/list/iterate.mo:a}}
```

## List.map

```motoko
func map<T, U>(

  l : List<T>
  f : T -> U

) : List<U>
```

| **parameters**     |               |
| ------------------ | ------------- |
| Generic parameters | `T, U`        |
| Variable argument  | `l : List<T>` |
| Function argument  | `f : T -> U`  |
| Return type        | `List<U>`     |

### Example

```motoko, run
{{#include _mo/list/map.mo:a}}
```

## List.filter

```motoko
func filter<T>(

  l : List<T>
  f : T -> Bool

) : List<T>
```

| **parameters**     |                 |
| ------------------ | --------------- |
| Generic parameters | `T`             |
| Variable argument  | `l : List<T>`   |
| Function argument  | `f : T -> Bool` |
| Return type        | `List<T>`       |

### Example

```motoko, run
{{#include _mo/list/filter.mo:a}}
```

## List.partition

```motoko
func partition<T>(

  l : List<T>
  f : T -> Bool

) : (List<T>, List<T>)
```

| **parameters**     |                      |
| ------------------ | -------------------- |
| Generic parameters | `T`                  |
| Variable argument  | `l : List<T>`        |
| Function argument  | `f : T -> Bool`      |
| Return type        | `(List<T>, List<T>)` |

### Example

```motoko, run
{{#include _mo/list/partition.mo:a}}
```

## List.mapFilter

```motoko
func mapFilter<T, U>(

  l : List<T>
  f : T -> ?U

) : List<U>
```

| **parameters**     |               |
| ------------------ | ------------- |
| Generic parameters | `T, U`        |
| Variable argument  | `l : List<T>` |
| Function argument  | `f : T -> ?U` |
| Return type        | `List<U>`     |

### Example

```motoko, run
{{#include _mo/list/mapFilter.mo:a}}
```

## List.mapResult

```motoko
func mapResult<T, R, E>(

  xs : List<T>
   f : T -> Result.Result<R, E>

) : Result.Result<List<R>, E>
```

| **parameters**     |                                |
| ------------------ | ------------------------------ |
| Generic parameters | `T, R, E`                      |
| Variable argument  | `xs : List<T>`                 |
| Function argument  | `f : T -> Result.Result<R, E>` |
| Return type        | `Result.Result<List<R>, E>`    |

### Example

```motoko, run
{{#include _mo/list/mapResult.mo:a}}
```

## List.append

```motoko
func append<T>(

  l : List<T>
  m : List<T>

) : (List<T>)
```

| **parameters**     |               |
| ------------------ | ------------- |
| Generic parameters | `T`           |
| Variable argument1 | `l : List<T>` |
| Variable argument2 | `m : List<T>` |
| Return type        | `List<T>`     |

### Example

```motoko, run
{{#include _mo/list/append.mo:a}}
```

## List.flatten

```motoko
func flatten<T>(

l : List<List<T>>

) : (List<T>)
```

| **parameters**     |                     |
| ------------------ | ------------------- |
| Generic parameters | `T`                 |
| Variable argument  | `l : List<List<T>>` |
| Return type        | `List<T>`           |

### Example

```motoko, run
{{#include _mo/list/flatten.mo:a}}
```

## List.take

```motoko
func take<T>(

  l : List<T>
  n : Nat

) : (List<T>)
```

| **parameters**     |               |
| ------------------ | ------------- |
| Generic parameters | `T`           |
| Variable argument1 | `l : List<T>` |
| Variable argument2 | `n : Nat`     |
| Return type        | `List<T>`     |

### Example

```motoko, run
{{#include _mo/list/take.mo:a}}
```

## List.drop

```motoko
func drop<T>(

  l : List<T>
  n : Nat

) : (List<T>)
```

| **parameters**     |               |
| ------------------ | ------------- |
| Generic parameters | `T`           |
| Variable argument1 | `l : List<T>` |
| Variable argument2 | `n : Nat`     |
| Return type        | `List<T>`     |

### Example

```motoko, run
{{#include _mo/list/drop.mo:a}}
```

## List.foldLeft

```motoko
func foldLeft<T, S>(

    list : List<T>
    base : S
 combine : (S, T) -> S

) : S
```

| **parameters**     |                         |
| ------------------ | ----------------------- |
| Generic parameters | `T, S`                  |
| Variable argument1 | `list : List<T>`        |
| Variable argument2 | `base : S`              |
| Function argument  | `combine : (S, T) -> S` |
| Return type        | `S`                     |

### Example

```motoko, run
{{#include _mo/list/foldLeft.mo:a}}
```

## List.foldRight

```motoko
func foldRight<T, S>(

    list : List<T>
    base : S
 combine : (T, S) -> S

) : S
```

| **parameters**     |                         |
| ------------------ | ----------------------- |
| Generic parameters | `T, S`                  |
| Variable argument1 | `list : List<T>`        |
| Variable argument2 | `base : S`              |
| Function argument  | `combine : (T, S) -> S` |
| Return type        | `S`                     |

### Example

```motoko, run
{{#include _mo/list/foldRight.mo:a}}
```

## List.find

```motoko
func find<T>(

  l : List<T>
  f : T -> Bool

) : ?T
```

| **parameters**     |                 |
| ------------------ | --------------- |
| Generic parameters | `T`             |
| Variable argument  | `l : List<T>`   |
| Function argument  | `f : T -> Bool` |
| Return type        | `?T`            |

### Example

```motoko, run
{{#include _mo/list/find.mo:a}}
```

## List.some

```motoko
func some<T>(

  l : List<T>
  f : T -> Bool

) : Bool
```

| **parameters**     |                 |
| ------------------ | --------------- |
| Generic parameters | `T`             |
| Variable argument  | `l : List<T>`   |
| Function argument  | `f : T -> Bool` |
| Return type        | `Bool`          |

### Example

```motoko, run
{{#include _mo/list/some.mo:a}}
```

## List.all

```motoko
func all<T>(

  l : List<T>
  f : T -> Bool

) : Bool
```

| **parameters**     |                 |
| ------------------ | --------------- |
| Generic parameters | `T`             |
| Variable argument  | `l : List<T>`   |
| Function argument  | `f : T -> Bool` |
| Return type        | `Bool`          |

### Example

```motoko, run
{{#include _mo/list/all.mo:a}}
```

## List.merge

```motoko
func merge<T>(

    l1 : List<T>
    l2 : List<T>
    lessThanOrEqual : (T, T) -> Bool

) : List<T>
```

| **parameters**     |                                    |
| ------------------ | ---------------------------------- |
| Generic parameters | `T`                                |
| Variable argument1 | `l1 : List<T>`                     |
| Variable argument2 | `l2 : List<T>`                     |
| Function argument  | `lessThanOrEqual : (T, T) -> Bool` |
| Return type        | `List<T>`                          |

### Example

```motoko, run
{{#include _mo/list/merge.mo:a}}
```

## List.compare

```motoko
func compare<T>(

     l1 : List<T>
     l2 : List<T>
compare : (T, T) -> Order.Order

) : Order.Order
```

| **parameters**     |                                   |
| ------------------ | --------------------------------- |
| Generic parameters | `T`                               |
| Variable argument1 | `l1 : List<T>`                    |
| Variable argument2 | `l2 : List<T>`                    |
| Function argument  | `compare : (T, T) -> Order.Order` |
| Return type        | `Order.Order`                     |

### Example

```motoko, run
{{#include _mo/list/compare.mo:a}}
```

## List.equal

```motoko
func equal<T>(

   l1 : List<T>
   l2 : List<T>
equal : (T, T) -> Bool

) : Bool
```

| **parameters**     |                          |
| ------------------ | ------------------------ |
| Generic parameters | `T`                      |
| Variable argument1 | `l1 : List<T>`           |
| Variable argument2 | `l2 : List<T>`           |
| Function argument  | `equal : (T, T) -> Bool` |
| Return type        | `Bool`                   |

### Example

```motoko, run
{{#include _mo/list/equal.mo:a}}
```

## List.tabulate

```motoko
func tabulate<T>(

  n : Nat
  f : Nat -> T

) : List<T>
```

| **parameters**     |                |
| ------------------ | -------------- |
| Generic parameters | `T`            |
| Variable argument  | `n : Nat`      |
| Function argument  | `f : Nat -> T` |
| Return type        | `List<T>`      |

### Example

```motoko, run
{{#include _mo/list/tabulate.mo:a}}
```

## List.make

```motoko
func make<T>(n : T) : List<T>
```

| **parameters**     |           |
| ------------------ | --------- |
| Generic parameters | `T`       |
| Variable argument  | `n : T`   |
| Return type        | `List<T>` |

### Example

```motoko, run
{{#include _mo/list/make.mo:a}}
```

## List.replicate

```motoko
func replicate<T>(

  n : Nat
  x : T

) : List<T>
```

| **parameters**     |           |
| ------------------ | --------- |
| Generic parameters | `T`       |
| Variable argument1 | `n : Nat` |
| Variable argument2 | `x : T`   |
| Return type        | `List<T>` |

### Example

```motoko, run
{{#include _mo/list/replicate.mo:a}}
```

## List.zip

```motoko
func zip<T, U>(

  xs : List<T>
  ys : List<U>

) : List<(T, U)>
```

| **parameters**     |                |
| ------------------ | -------------- |
| Generic parameters | `T, U`         |
| Variable argument1 | `xs : List<T>` |
| Variable argument2 | `ys : List<U>` |
| Return type        | `List<(T, U)>` |

### Example

```motoko, run
{{#include _mo/list/zip.mo:a}}
```

## List.zipWith

```motoko
func zipWith<T, U, V>(

  xs : List<T>
  ys : List<U>
   f : (T, U) -> V

) : List<V>
```

| **parameters**     |                   |
| ------------------ | ----------------- |
| Generic parameters | `T, U, V`         |
| Variable argument1 | `xs : List<T>`    |
| Variable argument2 | `ys : List<U>`    |
| Function argument2 | `f : (T, U) -> V` |
| Return type        | `List<V>`         |

### Example

```motoko, run
{{#include _mo/list/zipWith.mo:a}}
```

## List.split

```motoko
func split<T>(

  n : Nat
 xs : List<T>

) : (List<T>, List<T>)
```

| **parameters**     |                      |
| ------------------ | -------------------- |
| Generic parameters | `T`                  |
| Variable argument1 | `n : Nat`            |
| Variable argument2 | `xs : List<T>`       |
| Return type        | `(List<T>, List<T>)` |

### Example

```motoko, run
{{#include _mo/list/split.mo:a}}
```

## List.chunks

```motoko
func chunks<T>(

  n : Nat
 xs : List<T>

) : List<List<T>>
```

| **parameters**     |                 |
| ------------------ | --------------- |
| Generic parameters | `T`             |
| Variable argument1 | `n : Nat`       |
| Variable argument2 | `xs : List<T>`  |
| Return type        | `List<List<T>>` |

### Example

```motoko, run
{{#include _mo/list/chunks.mo:a}}
```

## List.fromArray

```motoko
func fromArray<T>(xs : [T]) : List<T>
```

| **parameters**     |            |
| ------------------ | ---------- |
| Generic parameters | `T`        |
| Variable argument  | `xs : [T]` |
| Return type        | `List<T>`  |

### Example

```motoko, run
{{#include _mo/list/fromArray.mo:a}}
```

## List.fromVarArray

```motoko
func fromVarArray<T>(

 xs : [var T]

) : List<T>
```

| **parameters**     |                |
| ------------------ | -------------- |
| Generic parameters | `T`            |
| Variable argument  | `xs : [var T]` |
| Return type        | `List<T>`      |

### Example

```motoko, run
{{#include _mo/list/fromVarArray.mo:a}}
```

## List.toArray

```motoko
func toArray<T>(xs : List<T>) : [T]
```

| **parameters**     |                |
| ------------------ | -------------- |
| Generic parameters | `T`            |
| Variable argument  | `xs : List<T>` |
| Return type        | `[T]`          |

### Example

```motoko, run
{{#include _mo/list/toArray.mo:a}}
```

## List.toVarArray

```motoko
func toVarArray<T>(xs : List<T>) : [var T]
```

| **parameters**     |                |
| ------------------ | -------------- |
| Generic parameters | `T`            |
| Variable argument  | `xs : List<T>` |
| Return type        | `[var T]`      |

### Example

```motoko, run
{{#include _mo/list/toVarArray.mo:a}}
```

## List.toIter

```motoko
func toIter<T>(xs : List<T>) : Iter.Iter<T>
```

| **parameters**     |                |
| ------------------ | -------------- |
| Generic parameters | `T`            |
| Variable argument  | `xs : List<T>` |
| Return type        | `Iter.Iter<T>` |

### Example

```motoko, run
{{#include _mo/list/toIter.mo:a}}
```
