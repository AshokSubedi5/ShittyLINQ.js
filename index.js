const Aggregate = require('./src/Aggregate');
const All = require('./src/All');
const Any = require('./src/Any');
const Concat = require('./src/Concat');
const Count = require('./src/Count');
const ElementAt = require('./src/ElementAt');
const FirstOrDefault = require('./src/FirstOrDefault');
const Empty = require('./src/Empty');
const First = require('./src/First');
const GroupJoin = require('./src/GroupJoin');
const Last = require('./src/Last');
const Min = require('./src/Min');
const Max = require('./src/Max');
const Prepend = require('./src/Prepend');
const Reverse = require('./src/Reverse');
const Select = require('./src/Select');
const SkipWhile = require('./src/SkipWhile');
const Sum = require('./src/Sum');
const TakeWhile = require('./src/TakeWhile');
const ToDictionary = require('./src/ToDictionary');
const Union = require('./src/Union');
const Where = require('./src/Where');
const Contains = require('./src/Contains');
const Except = require('./src/Except');

const bindAll = function() {
  Array.prototype.Aggregate = Aggregate;
  Array.prototype.All = All;
  Array.prototype.Any = Any;
  Array.prototype.Concat = Concat;
  Array.prototype.Count = Count;
  Array.prototype.ElementAt = ElementAt;
  Array.prototype.FirstOrDefault = FirstOrDefault;
  Array.Empty = Empty;
  Array.prototype.First = First;
  Array.prototype.GroupJoin = GroupJoin;
  Array.prototype.Last = Last;
  Array.prototype.Min = Min;
  Array.prototype.Max = Max;
  Array.prototype.Prepend = Prepend;
  Array.prototype.Reverse = Reverse;
  Array.prototype.Select = Select;
  Array.prototype.SkipWhile = SkipWhile;
  Array.prototype.Sum = Sum;
  Array.prototype.TakeWhile = TakeWhile;
  Array.prototype.ToDictionary = ToDictionary;
  Array.prototype.Union = Union;
  Array.prototype.Where = Where;
  Array.prototype.Contains = Contains;
  Array.prototype.ElementAt = ElementAt;
  Array.prototype.Except = Except;
};

module.exports = bindAll;
