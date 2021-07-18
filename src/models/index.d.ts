import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TweetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LikeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FleetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly username: string;
  readonly name: string;
  readonly email: string;
  readonly image?: string;
  readonly tweets?: (Tweet | null)[];
  readonly fleets?: (Fleet | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Tweet {
  readonly id: string;
  readonly content: string;
  readonly image?: string;
  readonly user?: User;
  readonly likes?: (Like | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Tweet, TweetMetaData>);
  static copyOf(source: Tweet, mutator: (draft: MutableModel<Tweet, TweetMetaData>) => MutableModel<Tweet, TweetMetaData> | void): Tweet;
}

export declare class Like {
  readonly id: string;
  readonly user: User;
  readonly tweet: Tweet;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Like, LikeMetaData>);
  static copyOf(source: Like, mutator: (draft: MutableModel<Like, LikeMetaData>) => MutableModel<Like, LikeMetaData> | void): Like;
}

export declare class Fleet {
  readonly id: string;
  readonly type: string;
  readonly text?: string;
  readonly image?: string;
  readonly user?: User;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Fleet, FleetMetaData>);
  static copyOf(source: Fleet, mutator: (draft: MutableModel<Fleet, FleetMetaData>) => MutableModel<Fleet, FleetMetaData> | void): Fleet;
}